const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  price: { type: String, required: true },
  productPicture: { type: String, required: true, default: "" },
  tireWidth: { type: String, required: true },
  tireHeight: { type: String, required: true },
  tireDiameter: { type: String, required: true },
  tireCompany: { type: String, required: true },
  carCompany: { type: String, required: true },
  season: { type: String, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
