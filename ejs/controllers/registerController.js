const data = require ("../db/database")
const db = require("../database/models")
const bycrypt = require(".")

const registerController= {
    register: function(req, res) {
        res.render('register', {title: 'Register'});
    }
}

proccessRegister: function (req,res){
    const usuario = req.body.usuario;
    const email = req.body.email;
    const contrasena = req.body.contrasena;
    const fechaNacimiento = req.body.fechaNacimiento;

    if (!email) {
        return res.render("register", {error: "Esta seccion no puede estar vacia."})
    }

    if(!password) {
        return res.render("register", {error: "Esta seccion no puede estar vacia."})
    }

    if (password.length <3 ){
        return res.render("register", {error: "La contraseña debe tener por lo menos 3 caracteres."})
    }

    const contrasenaEncriptada = bycrypt.hashSync(contrasena, 10);

    db.User.create({
        usuario: usuario,
        email: email,
        contrasena: contrasenaEncriptada,
        fechaNacimiento: fechaNacimiento
    }).then(function{}){

    }
}
module.exports = registerController;