const express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.product);
router.get('/add', productController.productadd);


module.exports = router;