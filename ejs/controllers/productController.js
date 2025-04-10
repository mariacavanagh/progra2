const productController= {
    product: function(req, res) {
        res.render('product');
    },
    productadd: function(req, res) {
        res.render('productadd', {title: 'Product add'});
    }
}

module.exports = productController;