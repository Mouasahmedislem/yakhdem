var mongoose = require("mongoose");

var pinksapSchema = new mongoose.Schema({
   
    title: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model("pinksap", pinksapSchema);
