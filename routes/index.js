const { Router } = require("express");

const router = Router();

router.use("/users", require("./users.route"));
router.use("/chats", require("./chats.route"));
router.use("/products", require("./products.route"));
router.use("/cars", require("./cars.route"));
router.use("/reviews", require("./reviews.route"));
router.use("/cart", require("./cart.route"));


module.exports = router;
