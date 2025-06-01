const database = require("../db/database");

const mainController = {
    index: function(req, res) {
        db.Producto.findAll({
            include: [
                {
                    model: db.Comentario,
                    as: 'comentarios'
                }
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