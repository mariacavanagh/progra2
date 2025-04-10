const productaddController= {
    productadd: function(req, res) {
        res.render('productadd', {title: 'Product add'});
    }
}

module.exports = productaddController;