const db = require('../database/models');

function recordameMiddleware(req, res, next) {
    if (req.cookies.recordame && !req.session.usuarioLogueado) {
        db.Usuario.findByPk(req.cookies.recordame)
        .then(function(usuario) {
            if (usuario) {
                req.session.usuarioLogueado = usuario;
            }
            next();
        })
        .catch(function(error) {
            console.log('Error en el middleware recordame:', error);
            next();
        });
    } else {
        next();
    }
}

module.exports = recordameMiddleware;
