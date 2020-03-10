exports.getSignupForm = (req, res, next) => {
    res.render('signup', { path: '/signup', pageTitle: 'Sign up', name: 'Edward' })
}