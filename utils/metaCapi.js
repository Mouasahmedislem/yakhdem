// metaCapi.js
require("dotenv").config();
const axios = require("axios");
const crypto = require("crypto");

// Hash helper (SHA-256)
function hash(data) {
  return data ? crypto.createHash("sha256").update(data.trim().toLowerCase()).digest("hex") : undefined;
}

// Main function to send events
const sendMetaCAPIEvent = async ({
  eventName,
  eventId,
  userData,
  customData = {},
  testEventCode = null,
}) => {
  const PIXEL_ID = process.env.FB_PIXEL_ID;
  const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        user_data: {
          em: hash(userData.email),
          ph: hash(userData.numero),
          client_ip_address: userData.ip,
          client_user_agent: userData.userAgent,
        },
        custom_data: customData,
      },
    ],
  };

  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }

  const url = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

  try {
    const response = await axios.post(url, payload);
    console.log("✅ Meta CAPI event sent:", response.data);
  } catch (error) {
    console.error("❌ Error sending Meta CAPI event:", error.response?.data || error.message);
  }
};

module.exports = sendMetaCAPIEvent;
