const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  cart: {type: Object, required: true},
  address: {type: String, required: true},
  name: {type: String, required: true},
  wilaya: {type: String, required: true},
  commune: {type: String, required: true},
  
  numero : {type: Number, required: true}

});

module.exports = mongoose.model('Order', orderSchema);