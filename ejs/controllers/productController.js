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
        if (!req.session.usuarioLogueado){
            return res.redirect("/login");
        }
        res.render('productadd', {
            usuario: req.session.usuarioLogueado,
        });
    },

    publicarProduct: function(req, res){
        if(!req.session.usuarioLogueado){
            return res.redirect("/login");
        }

        db.Producto.create({
            usuarioId: req.session.usuarioLogueado.id,
            nombreArchivo: req.body.nombreArchivo,
            nombreProducto: req.body.nombreProducto,
            descripcionProducto: req.body.descripcionProducto
            
           
        })
        .then(function(){
            res.redirect('/profile');
        })
        .catch(function(error){
            console.log('Error al guardar el producto', error);
            res.send('Hubo un error al guardar el producto.');
        });
    }
};


module.exports = productController;

