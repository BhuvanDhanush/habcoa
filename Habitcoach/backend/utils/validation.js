// Function to validate habit completion data
const validateHabitData = (habit) => {
    if (habit.completed < 0 || habit.total < 0) {
      throw new Error('Completed and total habits must be non-negative.');
    }
    if (habit.trackedDays < 0 || habit.trackedDays > 30) {
      throw new Error('Tracked days must be between 0 and 30.');
    }
    return true;
  };
  
  module.exports = { validateHabitData };
  