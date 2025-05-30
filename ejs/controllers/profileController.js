const db = require('../database/models');

const profileController= {
    profile: function(req, res) {
        if ( !req.session.usuarioLogueado) {
            return res.redirect('/login');
            
        } 
        db.Usuario.findByPk(req.session.usuarioLogueado.id, {
            include: [ "productos", "comentarios" ]
            })
        .then(function(usuario){
            if(!usuario){
                return res.redirect('/login');
            }
            return res.render('profile', {
                title:'Profile',
                usuario: usuario,
                productos: usuario.productos
            });
        })
        .catch(function(error){
            console.log(error);
            return res.send('error al cargar el perfil');
        })
        
    }
    
}

module.exports = profileController;