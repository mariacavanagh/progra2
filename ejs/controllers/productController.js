const productController= {
    product: function(req, res) {
        res.render('product', {title: 'Product'});
    }
}

module.exports = productController;