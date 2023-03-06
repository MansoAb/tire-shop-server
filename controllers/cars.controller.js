const Car = require("../models/Car.model");

module.exports.carsController = {
  addCar: async (req, res) => {
    const { carCompany, carModel, tires, year, modification } = req.body;
    try {
      const car = await Car.create({
        carCompany,
        carModel,
        tires,
        year,
        modification,
      });
      res.json(car);
    } catch (error) {
      res.json(error);
    }
  },
  getCars: async (req, res) => {
    try {
      const cars = await Car.find({}, "carCompany").distinct("carCompany");
      res.json(cars);
    } catch (error) {
      res.json(error);
    }
  },
  getCarModel: async (req, res) => {
    try {
      const models = await Car.find(
        { carCompany: req.params.id },
        "carModel"
      ).distinct("carModel");
      res.json(models);
    } catch (error) {
      res.json(error);
    }
  },
  getCarYear: async (req, res) => {
    const { carCompany, carModel } = req.body;

    try {
      const years = await Car.find({ carCompany, carModel }, "year").distinct(
        "year"
      );
      res.json(years);
    } catch (error) {
      res.json(error);
    }
  },
  getCarModification: async (req, res) => {
    const { carCompany, carModel, year } = req.body;
    try {
      const modifications = await Car.find(
        { carCompany, carModel, year },
        "modification"
      ).distinct("modification");
      res.json(modifications);
    } catch (error) {
      res.json(error);
    }
  },
};
