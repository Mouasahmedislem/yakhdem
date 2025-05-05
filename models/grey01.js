var mongoose = require("mongoose");

var grey01Schema = new mongoose.Schema({
    image: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model("grey01", grey01Schema);
