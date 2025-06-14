// utils/metaUserData.js

const crypto = require("crypto");

// Hash using SHA256
function hash(data) {
  return data
    ? crypto.createHash("sha256").update(data.trim().toLowerCase()).digest("hex")
    : undefined;
}

// Remove all non-digit characters from phone number
function cleanPhone(phone) {
  return phone ? phone.replace(/\D/g, "") : undefined;
}

// Get a valid IPv4 address from request
function getClientIp(req) {
  const rawIp = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || null;
  if (!rawIp) return null;

  const ip = rawIp.includes(":") ? rawIp.split(":").pop() : rawIp;

  // Check if it's a valid IPv4 (like 105.102.43.15)
  return /^\d{1,3}(\.\d{1,3}){3}$/.test(ip) ? ip : null;
}

// Build Meta user_data object
function getMetaUserData(userSession, req) {
  const ip = getClientIp(req);
  const userAgent = req.get("User-Agent");

  return {
    em: hash(userSession?.email),
    ph: hash(cleanPhone(userSession?.numero)),
    fn: hash(userSession?.firstName),
    ln: hash(userSession?.lastName),
    client_ip_address: ip,
    client_user_agent: userAgent,
  };
}

module.exports = getMetaUserData;
