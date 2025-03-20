const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // This should be hashed in real-world apps
});

module.exports = mongoose.model('User', UserSchema);
