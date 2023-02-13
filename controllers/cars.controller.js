const Car = require("../models/Car.model");

module.exports.carsController = {
  addCar: async (req, res) => {
    const { carCompany, carModel } = req.body;
    try {
      const car = await Car.create({
        carCompany,
        carModel,
      });
      res.json(car);
    } catch (error) {
      res.json(error);
    }
  },
};
