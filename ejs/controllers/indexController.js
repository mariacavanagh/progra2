
const indexController= {
    index: function(req, res) {
        res.render('index', {title: 'Index'});
    }
}

module.exports = indexController;