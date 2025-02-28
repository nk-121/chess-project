module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next(); // Allow access if authenticated
        }
        res.redirect("/auth/login"); // Redirect to login if not authenticated
    }
};
