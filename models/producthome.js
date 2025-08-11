// models/product.js
const mongoose = require('mongoose');

const producthomeSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: [String],         // For image slider
  description: String,     // Description tab
  details: Object,         // Info tab
  type: String,            // Optional: used for add-to-cart route logic
  videoId: String // <-- store YouTube video ID here
});

module.exports = mongoose.model('Producthome', producthomeSchema);
