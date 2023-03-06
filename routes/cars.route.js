const { Router } = require("express");
const router = Router();
const { carsController } = require("../controllers/cars.controller");

router.post("/", carsController.addCar);
router.get("/", carsController.getCars);
router.get("/models/:id", carsController.getCarModel);
router.post("/years", carsController.getCarYear);
router.post("/modifications", carsController.getCarModification);

module.exports = router;
