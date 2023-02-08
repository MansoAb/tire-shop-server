const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  textComment: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
