// models/product.js
const mongoose = require('mongoose');

const producthomeSchema = new mongoose.Schema({
  title: String,
  price: Number,
  oldPrice: {          
    type: Number,
    default: null
  },
  disponible: {  // 👈 ADD THIS FIELD
    type: Boolean,
    default: true  // true = in stock, false = out of stock
  },
  image: [String],         
  description: String,     
  details: Object,         
  type: String,            
  videoId: String,         
  // Add 3D model support
  stlFile: {
    type: String,
    default: null
  },
  // Optional: Additional 3D model settings
  model3D: {
    enabled: {
      type: Boolean,
      default: false
    },
    autoRotate: {
      type: Boolean,
      default: true
    },
    defaultColor: {
      type: String
    }
  }
}, {
  timestamps: true
});

// Virtual property to check if product has 3D model
producthomeSchema.virtual('has3DModel').get(function() {
  return !!this.stlFile;
});

module.exports = mongoose.model('Producthome', producthomeSchema);
