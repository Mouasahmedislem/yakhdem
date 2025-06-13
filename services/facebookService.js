const bizSdk = require('facebook-nodejs-business-sdk');
const crypto = require('crypto');
const ServerEvent = bizSdk.ServerEvent;
const UserData = bizSdk.UserData;
require('dotenv').config();

class FacebookService  {
  constructor() {
    this.accessToken = process.env.FB_ACCESS_TOKEN;
    this.pixelId = process.env.FB_PIXEL_ID;
  }

  // Hash data according to Meta's requirements
  _hashData(value) {
    if (!value) return null;
    return crypto.createHash('sha256')
      .update(value.toString().trim().toLowerCase())
      .digest('hex');
  }

  async sendEvent(eventName, eventData, req) {
    try {
      const userData = new UserData()
        .setClientIpAddress(req.ip)
        .setClientUserAgent(req.headers['user-agent'])
        .setFbp(req.cookies._fbp)
        .setFbc(req.cookies._fbc);

      // Add hashed user data
      if (req.user?.email) {
        userData.setEmail(this._hashData(req.user.email));
      }
      if (req.user?.phone) {
        userData.setPhone(this._hashData(req.user.phone.replace(/^0+/, '')));
      }

      const event = new ServerEvent()
        .setEventName(eventName)
        .setEventTime(Math.floor(Date.now() / 1000))
        .setUserData(userData)
        .setCustomData({
          currency: eventData.currency || 'DZD',
          value: eventData.value,
          content_ids: eventData.contentIds,
          content_name: eventData.contentName
        })
        .setEventSourceUrl(req.headers.referer || req.originalUrl);

      await new bizSdk.EventRequest(this.accessToken, this.pixelId)
        .setEvents([event])
        .execute();

    } catch (error) {
      console.error(`CAPI Error (${eventName}):`, error.message);
    }
  }
}

module.exports = new FacebookService();
