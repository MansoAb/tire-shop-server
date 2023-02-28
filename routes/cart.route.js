const {Router} = require("express")
const { cartControllers } = require("../controllers/cart.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const router = Router()

router.post("/add", authMiddleware, cartControllers.addProd)
router.post("/addProds", authMiddleware, cartControllers.addProducts)
router.post("/isInCart", authMiddleware, cartControllers.isInCart)



module.exports = router