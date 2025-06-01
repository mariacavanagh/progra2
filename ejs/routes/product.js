const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/add', productController.productadd);
router.post('/add', productController.publicarProduct);
router.post('/:id/comentario', productController.agregarComentario);

router.get('/:id', productController.product);




module.exports = router;