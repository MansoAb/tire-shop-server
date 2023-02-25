const { Router } = require("express");
const router = Router();
const { reviewsController } = require("../controllers/reviews.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/add", authMiddleware, reviewsController.addReview);
router.get("/", reviewsController.getReviews);

module.exports = router;
