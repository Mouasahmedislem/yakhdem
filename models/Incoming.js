const mongoose = require('mongoose');

const incomingSchema = new mongoose.Schema({
  from: String,
  name: String,
  type: String,
  text: String,
  payload: String,
  timestamp: String,
  raw: Object
}, { timestamps: true });

module.exports = mongoose.model('Incoming', incomingSchema);
