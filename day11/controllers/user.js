const User = require('../models/user');

exports.getSignupForm = (req, res, next) => {
    res.render('signup', { path: '/signup', pageTitle: 'Sign up', name: 'Edward' })
}

exports.postSignup = (req, res, next) => {
    new User({
            email: req.body.email,
            password: req.body.password
        }).save()
        .then(result => {
            res.redirect('/');
        }).catch(err => {
            throw new Error('Save User failed');
        });
}