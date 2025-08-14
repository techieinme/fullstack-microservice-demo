const Product = require('../models/Product');

exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      userId: req.user.userId
    });
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

exports.getMyProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ userId: req.user.userId });
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
};
