const database = require('../db/database');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const productController= {
    product: function(req, res) {
        const id = req.params.id;
        db.Producto.findByPk(id, {
            include: [
                {
                    model: db.Comentario,
                    as: "comentarios",
                    include: [{model: db.Usuario, as:"usuario" }]
                }
            ]
        })
        .then(function (producto){
            if (!producto){
                return res.send("Producto no encontrado");
            }
            res.render('product', {
                product: producto
            });
        })
        .catch(function(error){
            return res.send(error);
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
    },

    agregarComentario: function(req,res){
        if (!req.session.usuarioLogueado){
            return res.redirect("/login");
        }
        const productoId = req.params.id;
        const usuarioId = req.session.usuarioLogueado.id;
        const textoComentario = req.body.textoComentario;

        db.Comentario.create({
            productoId: productoId,
            usuarioId: usuarioId,
            textoComentario: textoComentario
        })
        .then(function() { 
            return res.redirect(`/product/${productoId}`);
        })
        .catch(function(error){
            console.log(error);
            return res.send('Hubo un error al registrar el comentario.')

        });

    }
};


module.exports = productController;

