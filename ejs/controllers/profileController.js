const data = require('../db/database');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const profileController= {
    profile: function(req, res) {
        res.render('profile', {
            title: 'Profile',
            usuario: data.usuario,
            productos: data.productos
        })
    },
    login: function(req, res){
        const mail= req.body.email;
        const password = req.body.contrasena;

        db.usuario.findOne({where:[{email}]
        }).then(function(resultado){
            if(resultado==null){
                return res.send("El usuario no existe")
            }else{return res.redirect("/")}
        })

    },
    create: function(req, res){
        const usuario = req.body.usuario;
        const email = req.body.email;
        const password = req.body.contrasena;

        let contrasenaEncriptada=bcrypt.hashSync(contrasena, 10);

        db.User.findOne({where:[{email}]
        }).then(function(resultado){
            if(resultado){
                return res.send("El usuario ya existe")
            }else if (resultado == null){
                return res.send("El usuario no existe")
            }else if (password.length < 5){
                return res.send("Contraseña debe tener mas de 5 caracteres")
            }else{
                return res.redirect("/")
            }
        })
    }
    
}

module.exports = profileController;