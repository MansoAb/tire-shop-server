const mongoose = require("mongoose")
const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: []
})

module.exports.Cart = mongoose.model("Cart", cartSchema)