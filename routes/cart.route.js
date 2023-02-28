const {Router} = require("express")
const { cartControllers } = require("../controllers/cart.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const router = Router()

router.post("/add", authMiddleware, cartControllers.addProd)
router.post("/addProds", authMiddleware, cartControllers.addProducts)
router.post("/isInCart", authMiddleware, cartControllers.isInCart)
router.get("/getProductsFromCart", authMiddleware, cartControllers.getAllProds)
router.post("/delete", authMiddleware, cartControllers.delProd)





module.exports = router