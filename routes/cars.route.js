const { Router } = require("express");
const router = Router();
const { carsController } = require("../controllers/cars.controller");

router.post("/", carsController.addCar);

module.exports = router;
