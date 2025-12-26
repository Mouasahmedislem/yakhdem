// models/notification.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producthome',
    required: true
  },
  email: {
    type: String,
    required: true
  },
  notified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
