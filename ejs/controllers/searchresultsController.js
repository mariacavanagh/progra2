const data = require("../db/database");
const db = require('../database/models');
const Sequelize = require("sequelize");
const Op        = Sequelize.Op;

const searchresultsController= {
    searchresults: function(req, res) {
        const buscar = req.query.search;
        db.Product.findAll({
            where: {
                title:[{[Op.like]: "%{search}%"}]
            }
        }).then(function(resultados){
            return res.render('search-result', {
                title:"Resultados de busqueda",
                productos: data.productos
            });
        }).catch(function(error){
            return res.send(error);
        })
    }
}

module.exports = searchresultsController;