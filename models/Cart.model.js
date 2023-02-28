const mongoose = require("mongoose")
const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: {
        type: mongoose.Schema.Types.Array,
        default: []
    }
})

module.exports.Cart = mongoose.model("Cart", cartSchema)