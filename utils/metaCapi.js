// utils/metaCapi.js
const axios = require('axios');
const crypto = require('crypto');

const accessToken = 'EAAJAPHZC8ZBlYBO41qd9CCxc2OJ4nzBMvwEu51I6ZA86AjVD1VZByrUk3H7EGIUQksQp0grg9EnWtyzU3EeGxGsvou2DOqm3OKsJ9aXHI7XigLZBubsKUSNXdCogaYEiajYztZBoE4ZANTqJ2IirZCYW3bFR4zC3fmjDPrnM0dzalb2XKFNM2HpBvjzXY3EeqhEPPgZDZD';
const pixelId = '633564199312760';

// Hashing function
function hash(data) {
  return crypto.createHash('sha256').update(data, 'utf8').digest('hex');
}

// Normalize phone number (Algerian)
function normalizePhone(phone) {
 phone.replace(/[^0-9]/g, '').replace(/^0+/, '');
}

// Main function
async function sendMetaEvent({ eventName, userData, customData }) {
  try {
    const payload = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: userData.eventSourceUrl || '',
      user_data: {
        em: userData.email ? hash(userData.email.trim().toLowerCase()) : undefined,
        ph: userData.phone ? hash(normalizePhone(userData.phone)) : undefined,
        fn: userData.firstName ? hash(userData.firstName.trim().toLowerCase()) : undefined,
        ln: userData.lastName ? hash(userData.lastName.trim().toLowerCase()) : undefined,
        client_user_agent: userData.userAgent,
        client_ip_address: userData.ip
      },
      custom_data: customData || {}
    };

    await axios.post(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
      data: [payload]
    });

    console.log(`✅ ${eventName} sent to Meta CAPI`);
  } catch (err) {
    console.error('❌ Error sending event to Meta CAPI:', err.response?.data || err.message);
  }
}

module.exports = sendMetaEvent;
