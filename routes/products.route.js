const { Router } = require("express");
const router = Router();
const { productsController } = require("../controllers/products.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const image = require("../middlewares/file.middleware");

router.post("/post", image.single("image"), productsController.addProduct);
// router.post("/email", productsController.sendEmail);
router.get("/", productsController.getProducts);
router.post("/", productsController.filterProducts);
router.get("/product/:id", productsController.getProduct);
router.post("/products", authMiddleware, productsController.getProductsById);

// router.post("/feedback", productsController.sendForm);

module.exports = router;
