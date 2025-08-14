const express = require('express');
const router = express.Router();
const { createProduct, getMyProducts, getAllProducts } = require('../controllers/product.controller');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, createProduct);
router.get('/my', verifyToken, getMyProducts);
router.get('/', getAllProducts);

module.exports = router;
