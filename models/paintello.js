const mongoose = require('mongoose');

const paintelloSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: [String]         // For image slider
});

module.exports = mongoose.model('paintello', paintelloSchema);
