const registerController= {
    register: function(req, res) {
        res.render('register', {title: 'Register'});
    }
}

module.exports = registerController;