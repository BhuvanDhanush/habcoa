const Habit = require('../models/Habit');

// Existing code for getting habits
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// New function to fetch habit history
const getHabitHistory = async (req, res) => {
  try {
    const habitHistory = await Habit.find({}); // You can modify the query to filter by user, dates, etc.
    res.json(habitHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getHabits, createHabit, getHabitHistory };
