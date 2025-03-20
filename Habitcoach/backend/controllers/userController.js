const User = require('../models/User');
const Habit = require('../models/Habit');
const { getRandomMotivationalQuote } = require('../services/motivationalQuotes');

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: 'user@example.com' }); // Replace with dynamic auth later
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

const saveHabit = async (req, res) => {
  const { habit, goal } = req.body;
  try {
    const newHabit = new Habit({ habit, goal });
    await newHabit.save();
    res.json({ message: 'Habit saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving habit' });
  }
};

const getMotivation = (req, res) => {
  const quote = getRandomMotivationalQuote();
  res.json({ quote });
};

module.exports = { getUser, saveHabit, getMotivation };
