const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  name: String,
  season: String,
  soilType: String,
  price: Number
}, { timestamps: true });

module.exports = mongoose.model("Crop", cropSchema);