const db = require('../database/models');

const profileController= {
    profile: function(req, res) {
        if ( !req.session.usuarioLogueado) {
            return res.redirect('/login');
            
        } 
        db.Usuario.findByPk(req.session.usuarioLogueado.id, {
            include: {association: "productos", 
                include: [
                    { association: "comentarios", 
                        include: ['usuario'] 
                    }
                ]
            } 
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
        
    },
    detalle: function(req, res) {
        const idUsuario = req.params.id;
    
        db.Usuario.findByPk(idUsuario, {
            include: [
                {
                    association: 'productos',
                    include: ['usuario', 
                        {
                            association: 'comentarios',
                            include: ['usuario'] 
                        }
                    ]
                },
            ]
        })
        .then(function(usuario) {
          if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
          }
    
          return res.render('profile', {
            usuario: usuario,
            productos: usuario.productos,
          });
        })
        .catch(function(error) {
          console.log(error);
          return res.status(500).send('Error al cargar el perfil');
        });
      }
    
}

module.exports = profileController;