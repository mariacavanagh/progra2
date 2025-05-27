const data = require('../db/database');

const profileController= {
    profile: function(req, res) {
        res.render('profile', {
            title: 'Profile',
            usuario: data.usuario,
            productos: data.productos
        })
    }
    
}

module.exports = profileController;