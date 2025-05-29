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
        const dni = req.body.dni;

        if (!email) {
            return res.render("register", { error: "El email no puede estar vacío." });
        }

        if (!contrasena) {
            return res.render("register", { error: "La contraseña no puede estar vacía." });
        }

        if (contrasena.length < 3) {
            return res.render("register", { error: "La contraseña debe tener al menos 3 caracteres." });
        }

            const contrasenaEncriptada = bcrypt.hashSync(contrasena, 10);

            db.Usuario.create({
                email: email,
                contrasena: contrasenaEncriptada,
                fechaNacimiento: fechaNacimiento,
                fotoPerfil: fotoPerfil,
                dni: dni,
            })
            .then(function() {
                return res.redirect("/login");
            })
            .catch(function(error){
                console.log(error);
                return res.send('Hubo un error al registrar el usuario.')

            })

        
    }
};

module.exports = registerController;