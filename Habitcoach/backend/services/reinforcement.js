// Function to provide reinforcement (e.g., gamification or rewards)
const provideReinforcement = (habit) => {
    if (habit.successRate >= 80) {
      return 'Great job! You are doing amazing!';
    } else if (habit.successRate >= 50) {
      return 'Keep it up! You are making good progress.';
    } else {
      return 'Don’t give up! Keep going and try again.';
    }
  };
  
  module.exports = { provideReinforcement };
  