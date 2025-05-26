const db = require("../database/models");
const bcrypt = require("bcryptjs");

const registerController = {
    register: function(req, res) {
        res.render('register', { title: 'Register' });
    },

    proccessRegister: function(req, res) {
        const usuario = req.body.usuario;
        const email = req.body.email;
        const contrasena = req.body.contrasena;
        const fechaNacimiento = req.body.fechaNacimiento;

        if (!email) {
            return res.render("register", { error: "El email no puede estar vacío." });
        }

        if (!contrasena) {
            return res.render("register", { error: "La contraseña no puede estar vacía." });
        }

        if (contrasena.length < 3) {
            return res.render("register", { error: "La contraseña debe tener al menos 3 caracteres." });
        }

        db.User.findOne({ where: { email: email } })
        .then(function(resultado) {
            if (resultado) {
                return res.render("register", { error: "Ese email ya está registrado." });
            }

            const contrasenaEncriptada = bcrypt.hashSync(contrasena, 10);

            db.User.create({
                usuario: usuario,
                email: email,
                contrasena: contrasenaEncriptada,
                fechaNacimiento: fechaNacimiento
            })
            .then(function() {
                return res.redirect("/login");
            });
        });
    }
};

module.exports = registerController;