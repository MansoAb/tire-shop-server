const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  price: { type: Number, required: true },
  productPicture: { type: String, required: true, default: "" },
  tireWidth: { type: Number, required: true },
  tireHeight: { type: Number, required: true },
  tireDiameter: { type: String, required: true },
  tireCompany: { type: String, required: true },
  tireType: { type: String, required: true },
  tireModel: { type: String, required: true },
  car: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
  season: { type: String, required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
