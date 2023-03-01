const { Cart } = require("../models/Cart.model");
const Product = require("../models/Product.model");

module.exports.cartControllers = {
  addProd: async (req, res) => {
    const { count, prodId, checked } = req.body;
    const { id } = req.user;
    try {
      let prods = await Cart.find({ userId: id });
      if (prods.length === 0) {
        await Cart.create({ userId: id });
        prods = await Cart.find({ userId: id });
        console.log("Cart created");
      }
      let isInCart = [false, 0];

      for (let i = 0; i < prods[0].products.length; i++) {
        if (
          String(prods[0].products[i].id) === prodId &&
          isInCart[0] === false
        ) {
          isInCart = [true, i];
        }
      }

      if (!isInCart[0]) {
        const cart = await prods[0].update({
          $push: { products: { id: prodId, count, checked } },
        });
        prods = await Cart.find({ userId: id });

        return res.json(prods);
      } else {
        prods[0].products[isInCart[1]] = {
          ...prods[0].products[isInCart[1]],
          checked,
        };

        await prods[0].save();
        
        return res.json([prods, prodId, checked]);
      }
    } catch (error) {
      return res.json(Error);
    }
  },
  addProducts: async (req, res) => {
    const { act } = req.body;
    const { id } = req.user;

    try {
      let prods = await Cart.findOne({ userId: id });

      if (prods.length === 0) {
        await Cart.create({ userId: id });
        prods = await Cart.findOne({ userId: id });
      }

      for (let i = 0; i < act.length; i++) {
        let isInCart = true;
        for (let j = 0; j < prods.products.length; j++) {
          if (String(prods.products[j].id) === act[i].id) {
            isInCart = false;
          }
        }
        if (isInCart) {
          prods.products.push({
            id: act[i].id,
            count: act[i].count,
            checked: act[i].checked,
          });
        }
      }

      await prods.save();
      return res.json(prods);
    } catch (error) {
      return res.json(Error);
    }
  },
  isInCart: async (req, res) => {
    const { prodId } = req.body;
    const { id } = req.user;

    try {
      const prod = await Cart.findOne({ userId: id });
      let isInCart = false;
      for (let i = 0; i < prod.products.length; i++) {
        if (String(prod.products[i].id) === prodId && !isInCart) {
          isInCart = true;
        }
      }
      if (isInCart) {
        return res.json("Продукт уже в корзине.");
      } else {
        return res.json(Error);
      }
    } catch (error) {
      return res.json(Error);
    }
  },
  getAllProds: async (req, res) => {
    const {id} = req.user
    try {
        const cart = await Cart.findOne({userId: id})
        const products = []
        for(let i = 0; i < cart.products.length; i++){
        let prod = await Product.findById(cart.products[i].id)
        prod = {...prod, count: cart.products[i].count, checked: cart.products[i].checked }

        products.push(prod)
      }

      return res.json(products)

    } catch (error) {
        return res.json(Error)
    }
  },
  delProd: async (req, res) => {
    const {prodId} = req.body
    const {id} = req.user

    try {
        const cart = await Cart.findOne({userId: id})
        cart.products = cart.products.filter(item => {
            return item.id === prodId ? null : item
        })
        await cart.save()
        const products = []
        for(let i = 0; i < cart.products.length; i++){
        let prod = await Product.findById(cart.products[i].id)
        prod = {...prod, count: cart.products[i].count, checked: cart.products[i].checked }

        products.push(prod)
      }

      return res.json(products)
        


    } catch (error) {
        return res.json(Error)
    }
  }
};
