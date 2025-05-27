const db = require('../database/models');
const bcrypt = require('bcryptjs');

const loginController={
    login: function(req, res) {
        if (req.session.usuarioLogueado){
            return res.redirect('/perfil');
        }else{
            return res.render('login', {title: 'Login'});
        }
    },
    processLogin: function(req, res){
        const email = req.body.email;
        const password = req.body.contrasena;
    
        db.Usuario.findOne({ where: { email } })
        .then(function(usuario){
            if (!usuario) {
                return res.render('login', {
                    title: 'Login',
                    error: 'El usuario no existe'
                });
            }
    
            const contrasenaValida = bcrypt.compareSync(password, usuario.contrasena);
            if (!contrasenaValida) {
                return res.render('login', {
                    title: 'Login',
                    error: 'Contraseña incorrecta'
                });
            }
    
            req.session.usuarioLogueado = usuario;
    
            if (req.body.recordame != undefined) {
                res.cookie('recordame', usuario.email, { maxAge: 1000 * 60 * 60 * 5 });
            }
    
            return res.redirect('/perfil');
        });
    },
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('recordame');
        return res.redirect('/login');
}
}


module.exports = loginController;


