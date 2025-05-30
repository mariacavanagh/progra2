const data = require("../db/database");
const db = require('../database/models');
const Sequelize = require("sequelize");
const Op        = Sequelize.Op;

const searchresultsController= {
    searchresults: function(req, res) {
        const buscar = req.query.search.toLowerCase().trim();
        
        db.Producto.findAll({
            where: {
                nombreProducto: { [Op.like]: `%${buscar}%` }
            },
            include: [{ association: 'usuario' }]
        }).then(function(resultados){
            console.log("Resultados encontrados:", resultados);
            if (resultados.length === 0){
                return res.render('search-result', {
                    title: "Sin resultados",
                    productos: [],
                    mensaje: "No hay resultados para su criterio de búsqueda"
                });
            }
            return res.render('search-result', {
                title: "Resultados de búsqueda",
                productos: resultados,
                mensaje: null
            }); 
            
        }).catch(function(error){
            return res.send(error);
        })
    }
}

module.exports = searchresultsController;