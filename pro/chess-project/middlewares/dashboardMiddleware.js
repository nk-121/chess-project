module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/auth/login');
    },
    roleCheck: (role) => {
        return (req, res, next) => {
            if (req.isAuthenticated() && req.user.role === role) {
                return next();
            }
            res.redirect('/auth/login');
        };
    }
};