const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

// Import your models

const { Player, Organizer, Coordinator } = require('../models/User');

passport.use(new LocalStrategy(
    { usernameField: "username", passwordField: "password", passReqToCallback: true },
    async (req, username, password, done) => {
        try {
            const role = req.body.role; // Get role from request body
            let user = null;

            // Find user based on username & role
            if (role === "player") {
                user = await Player.findOne({ username });
            } else if (role === "organizer") {
                user = await Organizer.findOne({ username });
            } else if (role === "coordinator") {
                user = await Coordinator.findOne({ username });
            } else {
                return done(null, false, { message: "Invalid role selection" });
            }

            if (!user) return done(null, false, { message: "No user found with this Username & Role" });

            // Verify password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return done(null, false, { message: "Incorrect password" });

            // Store user ID & role in session
            return done(null, { id: user.id, role: user.role });

        } catch (err) {
            console.error("Login error:", err);
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, { id: user.id, role: user.role });
});

passport.deserializeUser(async (data, done) => {
    let Model;
    if (data.role === "player") Model = Player;
    else if (data.role === "organizer") Model = Organizer;
    else if (data.role === "coordinator") Model = Coordinator;
    
    if (!Model) return done(new Error("Invalid role"));
    
    try {
        const user = await Model.findById(data.id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

module.exports = passport;
