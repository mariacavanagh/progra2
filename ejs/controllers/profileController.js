const profileController= {
    profile: function(req, res) {
        res.render('profile', {title: 'Profile'});
    }
}

module.exports = profileController;