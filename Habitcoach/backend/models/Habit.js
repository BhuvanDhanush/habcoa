const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  habit: String,
  goal: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Habit', HabitSchema);
