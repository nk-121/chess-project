const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, default: "player" }
});

const organizerSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    organization: String,
    role: { type: String, default: "organizer" }
});

const coordinatorSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    department: String,
    role: { type: String, default: "coordinator" }
});

// Export multiple models from the same file
module.exports = {
    Player: mongoose.model('Player', playerSchema),
    Organizer: mongoose.model('Organizer', organizerSchema),
    Coordinator: mongoose.model('Coordinator', coordinatorSchema)
};
