const database = require("../db/database");

const mainController = {
    index: function(req, res) {
        res.render('index', {
            title: 'Index',
            productos: database.productos
        });
    }
}

module.exports = mainController;