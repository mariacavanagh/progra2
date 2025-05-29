const db = require("../database/models");
const bcrypt = require("bcryptjs");

const registerController = {
    register: function(req, res) {
        if (req.session.usuarioLogueado){
            return res.redirect('/profile');
        }
        return res.render('register');
    },

    proccessRegister: function(req, res) {
        const email = req.body.email;
        const contrasena = req.body.contrasena;
        const fechaNacimiento = req.body.fechaNacimiento;
        const fotoPerfil = req.body.fotoPerfil;

        if (!email) {
            return res.render("register", { error: "El email no puede estar vacío." });
        }

        if (!contrasena) {
            return res.render("register", { error: "La contraseña no puede estar vacía." });
        }

        if (contrasena.length < 3) {
            return res.render("register", { error: "La contraseña debe tener al menos 3 caracteres." });
        }

        db.Usuario.findOne({ where: { email} })
        .then(function(resultado) {
            if (resultado) {
                return res.render("register", { error: "Ese email ya está registrado." });
            }

            const contrasenaEncriptada = bcrypt.hashSync(contrasena, 10);

            db.Usuario.create({
                email: email,
                contrasena: contrasenaEncriptada,
                fechaNacimiento: fechaNacimiento,
                fotoPerfil: fotoPerfil,
            })
            .then(function() {
                return res.redirect("/login");
            })
            .catch(function(error){
                console.log(error);
                return res.render('register', { error: 'Hubo un error al registrar el usuario.'})

            })

            
        });
    }
};

module.exports = registerController;