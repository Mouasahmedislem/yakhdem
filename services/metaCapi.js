require("dotenv").config();
const axios = require("axios");
const crypto = require("crypto");

// SHA-256 hash
function hash(data) {
  if (!data) return undefined;
  return crypto.createHash("sha256")
    .update(data.trim().toLowerCase())
    .digest("hex");
}

const sendMetaCAPIEvent = async ({
  eventName,
  eventId,
  userData,
  customData = {},
  eventSourceUrl = null,
  testEventCode = null,
}) => {
  const PIXEL_ID = process.env.FB_PIXEL_ID;
  const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.error("❌ Missing Facebook Pixel ID or Access Token");
    return;
  }

  if (!eventName || !eventId) {
    console.error("❌ Missing eventName or eventId");
    return;
  }

  try {
    // ✅ Build user_data object with ONLY available data
    const hashedUserData = {
      // 🔴 CRITICAL PARAMETERS (Must be 100%)
      fbp: userData.fbp, // Browser ID - Not hashed
      fbc: userData.fbc, // Click ID - Not hashed
      client_ip_address: userData.ip, // Not hashed
      client_user_agent: userData.userAgent, // Not hashed
      
      // ✅ Always available for your case
      country: hash("algeria"),
      
      // ✅ User data - Only if available
      em: hash(userData.email),
      ph: hash(userData.numero), // Use the already-cleaned number from route
      fn: hash(userData.firstName),
      ln: hash(userData.lastName),
      
      // ✅ Geographic data - Only for Purchase events with real data
      ct: hash(userData.city),
      st: hash(userData.state),
      
      // ✅ External ID for better matching
      external_id: hash(userData.email || userData.numero || userData.fbp)
    };

    // Remove undefined values
    Object.keys(hashedUserData).forEach(key => {
      if (hashedUserData[key] === undefined) {
        delete hashedUserData[key];
      }
    });

    // ✅ Enhanced custom_data
    const enhancedCustomData = {
      ...customData,
      currency: customData.currency || "DZD",
      content_category: customData.content_category || "home_decor"
    };

    // Clean undefined from custom_data
    Object.keys(enhancedCustomData).forEach(key => {
      if (enhancedCustomData[key] === undefined) {
        delete enhancedCustomData[key];
      }
    });

    // ✅ Final payload
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl,
          action_source: "website",
          user_data: hashedUserData,
          custom_data: enhancedCustomData,
        },
      ],
    };

    if (testEventCode) {
      payload.test_event_code = testEventCode;
      console.log("🧪 Test event code:", testEventCode);
    }

    // ✅ Diagnostic logging
    console.log("📊 Meta CAPI Diagnostics:", {
      eventName,
      eventId,
      criticalParams: {
        fbp: !!hashedUserData.fbp ? "✅" : "❌",
        fbc: !!hashedUserData.fbc ? "✅" : "❌",
        ip: !!hashedUserData.client_ip_address ? "✅" : "❌",
        userAgent: !!hashedUserData.client_user_agent ? "✅" : "❌",
        country: !!hashedUserData.country ? "✅" : "❌"
      },
      userParams: {
        email: !!hashedUserData.em ? "✅" : "➖",
        phone: !!hashedUserData.ph ? "✅" : "➖"
      }
    });

    // ✅ Send to Meta
    const url = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;
    
    const response = await axios.post(url, payload, {
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    });

    console.log("✅ Meta CAPI Event Sent Successfully");
    return response.data;

  } catch (error) {
    console.error("❌ Meta CAPI Error:", error.message);
  }
};

module.exports = sendMetaCAPIEvent;

