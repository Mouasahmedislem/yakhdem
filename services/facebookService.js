const bizSdk = require('facebook-nodejs-business-sdk'); // Correct package name
const ServerEvent = bizSdk.ServerEvent;
const UserData = bizSdk.UserData;
const CustomData = bizSdk.CustomData;
const EventRequest = bizSdk.EventRequest;

require('dotenv').config();

class CAPIService {
  constructor() {
    this.accessToken = process.env.FB_ACCESS_TOKEN; // Renamed for clarity
    this.pixelId = process.env.FB_PIXEL_ID || '633564199312760';
  }

  async sendEvent(eventName, eventData, req) {
    try {
      // 1. Prepare hashed user data
      const userData = new UserData()
        .setClientIpAddress(req.ip)
        .setClientUserAgent(req.headers['user-agent'])
        .setFbp(req.cookies._fbp) // From Facebook Pixel cookie
        .setFbc(req.cookies._fbc); // From click ID

      // 2. Add hashed identifiers if available
      if (req.user?.email) {
        userData.setEmail(this.#hashData(req.user.email));
      }
      if (req.user?.phone) {
        userData.setPhone(this.#hashData(req.user.phone.replace(/^0+/, '')));
      }

      // 3. Prepare event data
      const customData = new CustomData()
        .setCurrency(eventData.currency || 'DZD')
        .setValue(eventData.value);

      if (eventData.contentIds) customData.setContentIds(eventData.contentIds);
      if (eventData.contentName) customData.setContentName(eventData.contentName);

      // 4. Create and send event
      const event = new ServerEvent()
        .setEventName(eventName)
        .setEventTime(Math.floor(Date.now() / 1000))
        .setUserData(userData)
        .setCustomData(customData)
        .setEventSourceUrl(eventData.eventSourceUrl || 'https://paintello.uk');

      const response = await new EventRequest(
        this.accessToken,
        this.pixelId
      ).setEvents([event]).execute();

      return response;
    } catch (error) {
      console.error(`CAPI Error (${eventName}):`, {
        message: error.message,
        body: error.response?.body,
        stack: error.stack
      });
      throw error;
    }
  }

  // Private hashing method
  #hashData(value) {
    if (!value) return null;
    const crypto = require('crypto');
    return crypto.createHash('sha256')
      .update(String(value).trim().toLowerCase())
      .digest('hex');
  }
}

module.exports = new FacebookService();

