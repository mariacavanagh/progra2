const database = require('../db/database');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

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
    },

    publicarProduct: function(req, res){
        if(!req.session.usuario){
            return res.redirect("/login");
        }

        db.Product.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.file.filename 
           
        });

        res.redirect('/productos');
    }
};


module.exports = productController;

