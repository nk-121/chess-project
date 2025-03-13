const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const usersDB = require("../models/inMemoryDB"); // Import in-memory user storage

passport.use(
    new LocalStrategy(
        { usernameField: "username", passwordField: "password", passReqToCallback: true },
        async (req, username, password, done) => {
            try {
                const role = req.body.role; // Get role from request body

                // ✅ Find user in in-memory database
                const user = usersDB.findUserByUsername(username, role);
                if (!user) return done(null, false, { message: "No user found with this Username & Role" });

                // ✅ Verify password
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) return done(null, false, { message: "Incorrect password" });

                // ✅ Store user ID & role in session
                return done(null, { id: user.id, username: user.username, role: user.role });

            } catch (err) {
                console.error("Login error:", err);
                return done(err);
            }
        }
    )
);

// ✅ Serialize user into session
passport.serializeUser((user, done) => {
    done(null, { id: user.id, role: user.role });
});

// ✅ Deserialize user from session
passport.deserializeUser((user, done) => {
    const foundUser = usersDB.findUserById(user.id, user.role);
    done(null, foundUser || false);
});

module.exports = passport;
