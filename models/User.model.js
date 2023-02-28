const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  capital: { type: Number },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
