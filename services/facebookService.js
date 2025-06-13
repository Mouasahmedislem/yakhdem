const bizSdk = require('facebook-nodejs-business-sdk');
const ServerEvent = bizSdk.ServerEvent;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const CustomData = bizSdk.CustomData;

require('dotenv').config();

class FacebookService {
  constructor() {
    this.accessToken = process.env.FB_ACCESS_TOKEN;
    this.pixelId = process.env.FB_PIXEL_ID;
  }

  async sendEvent(eventName, eventData, userData) {
    try {
      const userDataObj = new UserData()
        .setClientIpAddress(userData.ip)
        .setClientUserAgent(userData.userAgent)
        .setFbp(userData.fbp)
        .setFbc(userData.fbc);

      if (userData.email) userDataObj.setEmail(userData.email);
      if (userData.phone) userDataObj.setPhone(userData.phone);

      const customData = new CustomData()
        .setCurrency('DZD')
        .setValue(eventData.value || 0);

      if (eventData.content_ids) customData.setContentIds(eventData.content_ids);
      if (eventData.content_name) customData.setContentName(eventData.content_name);
      if (eventData.content_type) customData.setContentType(eventData.content_type);

      const serverEvent = new ServerEvent()
        .setEventName(eventName)
        .setEventTime(Math.floor(Date.now() / 1000))
        .setUserData(userDataObj)
        .setCustomData(customData)
        .setEventSourceUrl(eventData.eventSourceUrl || 'https://yourdomain.com')
        .setActionSource('website');

      const eventsData = [serverEvent];
      const eventRequest = new EventRequest(this.accessToken, this.pixelId)
        .setEvents(eventsData);

      return await eventRequest.execute();
    } catch (error) {
      console.error('Facebook CAPI Error:', error);
      throw error;
    }
  }
}

module.exports = new FacebookService();
