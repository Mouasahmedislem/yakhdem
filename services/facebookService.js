const bizSdk = require('facebook-nodejs-business-sdk');
const crypto = require('crypto');

class FacebookService {
  constructor() {
    this.accessToken = process.env.FB_CAPI_ACCESS_TOKEN;
    this.pixelId = process.env.FB_PIXEL_ID || '633564199312760';
  }

  async sendEvent(eventName, eventData, req = {}) {
    try {
      // 1. Safely extract request data with defaults
      const userAgent = req.headers?.['user-agent'] || 'unknown';
      const ip = req.ip || '127.0.0.1';
      const cookies = req.cookies || {};

      // 2. Prepare user data with fallbacks
      const userData = new bizSdk.UserData()
        .setClientIpAddress(ip)
        .setClientUserAgent(userAgent)
        .setFbp(cookies._fbp || null)
        .setFbc(cookies._fbc || null);

      // 3. Add hashed identifiers if available
      if (req.user?.email) {
        userData.setEmail(this.#hashData(req.user.email));
      }
      if (req.user?.phone) {
        userData.setPhone(this.#hashData(req.user.phone.replace(/^0+/, '')));
      }

      // 4. Create event
      const event = new bizSdk.ServerEvent()
        .setEventName(eventName)
        .setEventTime(Math.floor(Date.now() / 1000))
        .setUserData(userData)
        .setCustomData(new bizSdk.CustomData()
          .setCurrency(eventData.currency || 'DZD')
          .setValue(eventData.value)
          .setContentIds(eventData.contentIds?.map(String))
          .setContentName(eventData.contentName)
        )
        .setEventSourceUrl(req.originalUrl || req.headers?.referer || 'https://yourdomain.com');

      // 5. Send event
      return await new bizSdk.EventRequest(
        this.accessToken,
        this.pixelId
      ).setEvents([event]).execute();

    } catch (error) {
      console.error(`CAPI Error (${eventName}):`, {
        message: error.message,
        inputData: { eventName, eventData, req: !!req },
        stack: error.stack
      });
      throw error;
    }
  }

  #hashData(value) {
    if (!value) return null;
    return crypto.createHash('sha256')
      .update(String(value).trim().toLowerCase())
      .digest('hex');
  }
}

module.exports = new FacebookService();
