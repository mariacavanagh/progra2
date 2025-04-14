const data = require("../db/database");

const searchresultsController= {
    searchresults: function(req, res) {
        const resultado = data.productos[0];

        res.render('search-result', {
            title:"Resultados de busqueda",
            productos: data.productos
        });
    }
}

module.exports = searchresultsController;