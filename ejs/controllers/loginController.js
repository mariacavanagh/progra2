const loginController={
    login: function(req, res) {
        res.render('login', {title: 'Login'});
    }
}

module.exports = loginController;