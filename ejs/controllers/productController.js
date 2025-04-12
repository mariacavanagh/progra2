const database = require('../db/database')

const productController= {
    product: function(req, res) {
        res.render('product');
    },
    productadd: function(req, res) {
        res.render('productadd', {
            usuario: database.usuario
        });
    }
}

module.exports = productController;