const Product = require("../models/Product.model");
const Car = require("../models/Car.model");

module.exports.productsController = {
  addProduct: async (req, res) => {
    const productPicture =
      "http://localhost:4040/images/" +
      req.file.originalname.replaceAll(" ", "_");
    const {
      productName,
      productDescription,
      price,
      tireWidth,
      tireHeight,
      tireDiameter,
      tireCompany,
      car,
      season,
      tireType,
      tireModel,
    } = req.body;
    try {
      const product = await Product.create({
        productName,
        productDescription,
        price,
        productPicture,
        tireWidth,
        tireHeight,
        tireDiameter,
        tireCompany,
        car,
        season,
        tireType,
        tireModel,
      });
      res.json(product);
    } catch (error) {
      res.json(error);
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.json({
          error: "Такого товара уже не существует",
        });
      }

      res.json(product);
    } catch (error) {
      res.json(error);
    }
  },

  getProducts: async (req, res) => {
    const obj = req.body.tireArray;
    try {
      const query = {};
      for (const key in obj) {
        if (obj[key] !== false || obj[key] !== 0) {
          query[key] = obj[key];
        }
      }
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.json(error);
    }
  },
  getProductsById: async (req, res) => {
    const { arr } = req.body;

    try {
      const products = [];
      for (let i = 0; i < arr.length; i++) {
        const prod = await Product.findById(arr[i].id);
        products.push({
          count: arr[i].count,
          checked: arr[i].checked,
          _doc: prod,
        });
      }
      return res.json(products);
    } catch (error) {
      return res.json(Error);
    }
  },

  filterProducts: async (req, res) => {
    const obj = req.body.tireArray[0];

    try {
      if (obj.carCompany !== 0) {
        const query = {};
        for (const key in obj) {
          if (obj[key] !== false && obj[key] !== 0) {
            query[key] = obj[key];
          }
        }

        const products = await Car.find(query, "tires")
          .populate("tires")
          .lean();

        const filterProd = products
          .map((car) => car.tires)
          .flat()
          .filter((obj, index, arr) => {
            return arr.findIndex((elem) => elem._id === obj._id) === index;
          });

        res.json(filterProd);
      } else {
        const query = {};
        for (const key in obj) {
          if (obj[key] !== false && obj[key] !== 0) {
            query[key] = obj[key];
          }
        }
        const products = await Product.find(query);
        res.json(products);
      }
    } catch (error) {
      res.json(error);
    }
  },
};
