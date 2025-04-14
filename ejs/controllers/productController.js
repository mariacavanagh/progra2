const database = require('../db/database');

const productController= {
    product: function(req, res) {
        const miProducto = database.productos[0];

        res.render('product' , {
            product: miProducto,
            usuario: database.usuario
        });
         
    },
    productadd: function(req, res) {
        res.render('productadd', {
            usuario: database.usuario,
            productos: database.productos
        });
    }};



module.exports = productController;

