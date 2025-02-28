require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const homeRoutes = require('./routes/home');
const flash = require('connect-flash');
const { ensureAuthenticated } = require("./middlewares/authMiddleware");
require('./config/passport'); // Passport config

const app = express();

// ✅ Setup Session Middleware BEFORE flash
app.use(session({ 
    secret: 'secret', 
    resave: false, 
    saveUninitialized: false 
}));

// ✅ Initialize Passport AFTER session
app.use(passport.initialize());
app.use(passport.session());

// ✅ Enable Flash Messages AFTER session
app.use(flash());

// ✅ Middleware to make flash messages available in views
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error'); // For Passport errors
    next();
});

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// ✅ Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// ✅ Protect All Routes Except `/auth` & `/home`
app.use((req, res, next) => {
    if (req.path.startsWith("/auth") || req.path.startsWith("/")) {
        return next(); // Allow login and signup
    }
    ensureAuthenticated(req, res, next); // Redirect to login if not authenticated
});

// ✅ Define Routes AFTER authentication middleware
app.use('/auth', authRoutes);
app.use("/", homeRoutes);

// ✅ Example Flash Message Route
app.get('/set-flash', (req, res) => {
    req.flash('success_msg', 'Flash message set!'); // ✅ Use req.flash, not res.flash
    res.redirect('/auth/login'); // Redirect to check flash message
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
