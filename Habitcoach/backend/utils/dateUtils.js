const moment = require('moment'); // Use moment.js for date manipulation

// Function to calculate days between two dates
const calculateDaysBetween = (startDate, endDate) => {
  return moment(endDate).diff(moment(startDate), 'days');
};

// Function to check if a habit is overdue
const isHabitOverdue = (habit) => {
  const today = moment();
  const dueDate = moment(habit.createdAt).add(30, 'days'); // Assuming habit should be completed in 30 days
  return today.isAfter(dueDate);
};

module.exports = { calculateDaysBetween, isHabitOverdue };
