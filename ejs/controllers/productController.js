const database = require('../db/database');

const productController= {
    product: function(req, res) {
        const miProducto = database.productos[0];
        res.render('product' , {productos: miProducto});
         
    },
    productadd: function(req, res) {
        res.render('productadd', {
            usuario: database.usuario
        });
    }};



module.exports = productController;

