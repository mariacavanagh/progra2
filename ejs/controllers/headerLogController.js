const database = require('../db/database');


const headerLogController={
    headerlog: function(req, res) {
        res.render('headerlog', {title: 'Header Logueado'});

    },
    profile: function(req, res) {
        res.render('profile', {
            usuario: database.usuario
        });
    },
    productadd: function(req, res) {
        res.render('productadd', {
            usuario: database.usuario
        });
    }
}


module.exports = headerLogController;
