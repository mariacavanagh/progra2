const loginController={
    login: function(req, res) {
        res.render('login', {title: 'Login'});
    },
    processLogin: function(req, res){
        const mail= req.body.email;
        const password = req.body.contrasena;

        db.User.findOne({where:[{email}]
        }).then(function(resultado){
            if(resultado==null){
                return res.send("El usuario no existe")
            }else{return res.redirect("/")}
        })

    },
        create: function(req, res){
            const usuario = req.body.usuario;
            const email = req.body.email;
            const contrasena = req.body.contrasena;

            const contrasenaEncriptada=bcrypt.hashSync(contrasena, 10);

            db.User.findOne({where:[{email}]
            }).then(function(resultado){
                if(resultado){
                    return res.send("El usuario ya existe")
                }else if (resultado == null){
                    return res.send("El usuario no existe")
                }else if (password.length < 5){
                    return res.send("Contraseña debe tener mas de 5 caracteres")
                }else{
                    return res.redirect("/");
                }
            })
                db.User.create({
                    name: usuario,
                    email: email,
                    contrasena: contrasenaEncriptada

                })
    }
}

module.exports = loginController;