const bcrypt = require("bcrypt");

// Separate in-memory storage for each user type
const players = [];
const organizers = [];
const coordinators = [];

module.exports = {
    // Find user by username & role
    findUserByUsername: (username, role) => {
        if (role === "player") return players.find((user) => user.username === username);
        if (role === "organizer") return organizers.find((user) => user.username === username);
        if (role === "coordinator") return coordinators.find((user) => user.username === username);
        return null;
    },

    // Find user by ID
    findUserById: (id, role) => {
        if (role === "player") return players.find((user) => user.id === id);
        if (role === "organizer") return organizers.find((user) => user.id === id);
        if (role === "coordinator") return coordinators.find((user) => user.id === id);
        return null;
    },

    // Add user based on role
    addUser: async (user) => {
        
        user.id = Date.now(); // Generate unique ID

        if (user.role === "player") players.push(user);
        else if (user.role === "organizer") organizers.push(user);
        else if (user.role === "coordinator") coordinators.push(user);
    },
};
