require("dotenv").config();
const axios = require("axios");

const crypto = require("crypto");

// Clean phone: remove all non-digit characters
function cleannumero(numero) {
  return numero ? numero.replace(/\D/g, "") : undefined;
}

// SHA-256 hash
function hash(data) {
  return data
    ? crypto.createHash("sha256").update(data.trim().toLowerCase()).digest("hex")
    : undefined;
}

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
          ph: hash(cleannumero(userData.numero)),
          fn: hash(userData.firstName),
          ln: hash(userData.lastName),
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
    console.log("🚀 Final payload sent to Meta:", JSON.stringify(payload, null, 2));
    console.log("✅ Meta CAPI Event Sent:", response.data);
  } catch (error) {
    console.error("❌ Meta CAPI Error:", error.response?.data || error.message);
  }
};

module.exports = sendMetaCAPIEvent;



