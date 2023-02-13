const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  carCompany: { type: String, required: true },
  carModel: { type: String, required: true },
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
