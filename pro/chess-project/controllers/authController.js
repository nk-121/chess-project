const passport = require('passport');
const bcrypt = require('bcrypt');

const usersDB = require("../models/inMemoryDB");

exports.getSignup = (req, res) => {
    res.render('layout/auth', { body: '../auth/signup', messages: req.flash() });
};



exports.postSignup = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Validate role
        if (!["player", "organizer", "coordinator"].includes(role)) {
            req.flash('error', 'Invalid role selected');
            return res.redirect('/auth/signup');
        }

        // ✅ Check if user already exists
        const existingUser = usersDB.findUserByUsername(username, role);
        if (existingUser) {
            console.log('User already exists with this username.');
            req.flash('error', 'User already exists with this username.');
            return res.redirect('/auth/signup');
        }

        // ✅ Create new user and store it in memory
        await usersDB.addUser({ username, email, password: hashedPassword, role });

        req.flash('success', 'Signup successful! Please log in.');
        res.redirect('/auth/login');
    } catch (error) {
        console.error(error);
        req.flash('error', 'An error occurred during signup.');
        res.redirect('/auth/signup');
    }
};


// ✅ Get Login Page
exports.getLogin = (req, res) => {
    res.render('layout/auth', { body: '../auth/login', messages: req.flash() });
};

// ✅ Handle Login
exports.postLogin = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);
        if (!user) {
            req.flash("error", info.message);
            return res.redirect("/auth/login"); // Authentication failed
        }

        req.logIn(user, (err) => {
            if (err) return next(err);

            // ✅ Redirect based on the user's role
            if (user.role === "player") {
                return res.redirect("/dashboard/player");
            } else if (user.role === "organizer") {
                return res.redirect("/dashboard/organizer");
            } else if (user.role === "coordinator") {
                return res.redirect("/dashboard/coordinator");
            } else {
                req.flash("error", "Unknown role. Please try again.");
                return res.redirect("/auth/login"); // Fallback in case of unknown role
            }
        });
    })(req, res, next);
};


// ✅ Logout
exports.logout = (req, res) => {
    req.logout(() => {
        req.flash('success', 'Logged out successfully.');
        res.redirect('/auth/login');
    });
};
