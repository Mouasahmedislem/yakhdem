const bizSdk = require('facebook-nodejs-business-sdk');
const crypto = require('crypto');
const ServerEvent = bizSdk.ServerEvent;
const UserData = bizSdk.UserData;
const CustomData = bizSdk.CustomData;

class FacebookService {
  constructor() {
    this.accessToken = process.env.FB_ACCESS_TOKEN;
    this.pixelId = process.env.FB_PIXEL_ID || '633564199312760';
  }

  #hashData(value) {
    if (!value) return null;
    return crypto.createHash('sha256')
      .update(String(value).trim().toLowerCase())
      .digest('hex');
  }

  async sendEvent(eventName, eventData, req) {
    try {
      const userData = new UserData()
        .setClientIpAddress(req.ip || '0.0.0.0')
        .setClientUserAgent(req.headers?.['user-agent'] || 'unknown')
        .setFbp(req.cookies?._fbp || this.#generateFbp())
        .setFbc(req.cookies?._fbc || null);

      if (req.user?.email) userData.setEmail(this.#hashData(req.user.email));
      if (req.user?.phone) userData.setPhone(this.#hashData(req.user.phone));
      if (req.user?.id) userData.setExternalId(this.#hashData(req.user.id));

      const event = new ServerEvent()
        .setEventName(eventName)
        .setEventTime(Math.floor(Date.now() / 1000))
        .setUserData(userData)
        .setCustomData(new CustomData()
          .setCurrency('DZD')
          .setValue(eventData.value)
          .setContentIds(eventData.contentIds?.map(String))
          .setContentName(eventData.contentName)
        );

      await new bizSdk.EventRequest(this.accessToken, this.pixelId)
        .setEvents([event])
        .execute();

    } catch (error) {
      console.error(`CAPI Error (${eventName}):`, error.message);
    }
  }

  #generateFbp() {
    return `fb.1.${Date.now()}.${Math.random().toString(36).substring(2, 8)}`;
  }
}

module.exports = new FacebookService();


