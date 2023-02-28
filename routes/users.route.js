const { Router } = require("express");
const router = Router();
const { userController } = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/signup", userController.signUp);
router.post("/login", userController.signIn);
router.patch("/capital", authMiddleware, userController.toUpYourAccount);
router.post("/isAuth", authMiddleware, userController.isAuth);


module.exports = router;
