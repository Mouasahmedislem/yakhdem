const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  cart: {type: Object, required: true},
  address: {type: String, required: true},
  name: {type: String, required: true},
  city: {type: String, required: true},
  country: {type: String, required: true},
  numero: {type: Number, required: true},
  
  // Order Status System
  status: {
    type: String,
    required: true,
    enum: [
      'pending',           // Order placed, waiting for confirmation
      'confirmed',         // Order confirmed by admin
      'processing',        // Being prepared for shipment
      'ready_for_pickup',  // Ready for carrier pickup
      'shipped',           // Shipped with tracking
      'out_for_delivery',  // Out for delivery
      'delivered',         // Successfully delivered
      'cancelled',         // Order cancelled
      'refunded',          // Order refunded
      'on_hold'           // Order on hold (payment issues, etc.)
    ],
    default: 'pending'
  },
  
  // Status History
  statusHistory: [{
    status: {
      type: String,
      required: true,
      enum: [
        'pending', 'confirmed', 'processing', 'ready_for_pickup', 
        'shipped', 'out_for_delivery', 'delivered', 'cancelled', 
        'refunded', 'on_hold'
      ]
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    note: String, // Optional note about status change
    changedBy: String // 'system', 'admin', 'customer'
  }],
  
  // Shipping Information
  shippingFee: { type: Number, default: 0 },
  deliveryDelay: { type: String },
  totalWithShipping: { type: Number },
  
  // Tracking Information
  trackingNumber: String,
  carrier: String,
  estimatedDelivery: Date,
  actualDelivery: Date,
  
  // Payment Information
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded', 'partially_refunded'],
    default: 'pending'
  },
  paymentMethod: String,
  
  // Return System
  returnRequest: { 
    type: Schema.Types.ObjectId, 
    ref: 'ReturnRequest' 
  },
  returnStatus: {
    type: String,
    enum: ['none', 'requested', 'approved', 'rejected', 'processing', 'completed'],
    default: 'none'
  },
  
  // Admin Notes
  adminNotes: String,
  
  // Customer Communication
  customerNotes: String,
  
  // Timestamps
  statusUpdatedAt: Date

}, { 
  timestamps: true 
});

// Middleware to automatically update status history and statusUpdatedAt
orderSchema.pre('save', function(next) {
  if (this.isModified('status')) {
    // Add to status history
    this.statusHistory.push({
      status: this.status,
      changedBy: 'system',
      note: 'Status updated automatically'
    });
    
    // Update status timestamp
    this.statusUpdatedAt = new Date();
  }
  next();
});

// Static method to get orders by status
orderSchema.statics.findByStatus = function(status) {
  return this.find({ status: status }).sort({ createdAt: -1 });
};

// Instance method to update status with note
orderSchema.methods.updateStatus = function(newStatus, note = '', changedBy = 'system') {
  this.status = newStatus;
  this.statusHistory.push({
    status: newStatus,
    note: note,
    changedBy: changedBy,
    timestamp: new Date()
  });
  this.statusUpdatedAt = new Date();
  return this.save();
};

// Virtual for order age
orderSchema.virtual('orderAge').get(function() {
  return Date.now() - this.createdAt;
});

// Virtual for isDelivered
orderSchema.virtual('isDelivered').get(function() {
  return this.status === 'delivered';
});

// Virtual for canReturn (within 4 days of delivery)
orderSchema.virtual('canReturn').get(function() {
  if (this.status !== 'delivered' || !this.actualDelivery) return false;
  const fourDays = 4 * 24 * 60 * 60 * 1000; // 4 days in milliseconds
  return (Date.now() - this.actualDelivery) <= fourDays;
});

module.exports = mongoose.model('Order', orderSchema);
