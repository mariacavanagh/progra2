const { Association } = require("sequelize");
const db = require("../database/models");

const mainController = {
    index: function(req, res) {
        db.Producto.findAll({
            include: [
                { association:'comentarios'},
                { association: 'usuario' }
            ]
        })
        .then(function(productos){
            res.render('index', {productos:productos});
        })
        .catch(function(error){
            res.send(error);
        });
    }
}

module.exports = mainController;