const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  carCompany: { type: String, required: true },
  carModel: { type: String, required: true },
  year: { type: String, required: true },
  modification: { type: String, required: true },
  tires: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
