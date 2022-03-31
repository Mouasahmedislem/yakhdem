var mongoose = require("mongoose");

var toolSchema = new mongoose.Schema({
    image: {type: String, required: true},
    title: {type: String, required: true},
    href: {type: String, required: true}
});

module.exports = mongoose.model("tool", toolSchema);