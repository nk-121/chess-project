exports.getDashboard = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }
    console.log("Session User:", req.session.user);
    res.render('dashboard/dashboard', { user: req.session.user});
};
