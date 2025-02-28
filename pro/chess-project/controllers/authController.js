const passport = require('passport');
const bcrypt = require('bcrypt');
const { Player, Organizer, Coordinator } = require('../models/User');

// ✅ Get Signup Page
exports.getSignup = (req, res) => {
    res.render('layout/auth', { body: '../auth/signup', messages: req.flash() });
};

// ✅ Handle Signup
exports.postSignup = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        let Model;
        if (role === "player") Model = Player;
        else if (role === "organizer") Model = Organizer;
        else if (role === "coordinator") Model = Coordinator;
        else {
            req.flash('error', 'Invalid role selected');
            return res.redirect('/auth/signup');
        }

        // ✅ Check if user already exists
        const existingUser = await Model.findOne({ email });
        if (existingUser) {
            console.log('User already exists with this email.');
            req.flash('error', 'User already exists with this email.');
            return res.redirect('/auth/signup');
        }

        // ✅ Create new user
        const newUser = new Model({ username, email, password: hashedPassword });
        await newUser.save();

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
exports.postLogin = passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/auth/login',
    failureFlash: true // ✅ This enables flash messages for failed login attempts
});

// ✅ Logout
exports.logout = (req, res) => {
    req.logout(() => {
        req.flash('success', 'Logged out successfully.');
        res.redirect('/auth/login');
    });
};
