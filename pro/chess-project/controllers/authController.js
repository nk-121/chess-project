const User = require('../models/User');
const passport = require('passport');

// Signup Page
exports.getSignup = (req, res) => {
    res.render('layout/auth', { body: '../auth/signup' });
};

// Handle Signup
exports.postSignup = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.send('User already exists! Try logging in.');

        const newUser = new User({ username, password });
        await newUser.save();

        res.redirect('/auth/login');
    } catch (err) {
        res.send('Error signing up.');
    }
};

// Login Page
exports.getLogin =  (req, res) => {
    res.render('layout/auth', { body: '../auth/login' });
};

// Handle Login
exports.postLogin = passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/auth/login',
    failureFlash: true
});

// Logout
exports.logout = (req, res) => {
    req.logout(() => res.redirect('/auth/login'));
};
