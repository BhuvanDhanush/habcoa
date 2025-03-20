const { analyzeHabitPatterns } = require('../ml/habitPatternModel'); // Import ML model

// Function to analyze habits and provide insights
const analyzeHabits = async () => {
  try {
    // Get habit patterns
    const { predictions, habitData } = await analyzeHabitPatterns();

    // Logic to provide additional insights or store predictions
    return {
      predictions,
      habitData,
    };
  } catch (error) {
    console.error('Error in habit analysis:', error);
    throw error;
  }
};

module.exports = { analyzeHabits };
