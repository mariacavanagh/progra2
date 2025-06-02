const data = require("../db/database");
const db = require('../database/models');
const Sequelize = require("sequelize");
const Op        = Sequelize.Op;

const searchresultsController= {
    searchresults: function(req, res) {
        const buscar = req.query.search;

        
        
        db.Producto.findAll({
            include: [{ association: 'usuario' }],
            where: {
                nombreProducto: {[Op.like]: `%${buscar}%`}
            }
        }).then(function(resultados){
            res.render('search-result', {
                productos: resultados,
                buscar: buscar
            }); 
            
        }).catch(function(error){
            return res.send(error);
        })
    }
}

module.exports = searchresultsController;