const tf = require('@tensorflow/tfjs-node'); // Import TensorFlow.js
const Habit = require('../models/Habit'); // Import Habit model

// Function to analyze habit patterns
const analyzeHabitPatterns = async () => {
  try {
    // Fetch user habits from the database
    const habits = await Habit.find();

    // If no habits are found
    if (habits.length === 0) {
      throw new Error('No habit data available for analysis.');
    }

    // Extract relevant habit data
    const habitData = habits.map((habit) => ({
      habitName: habit.habit,
      goal: habit.goal,
      createdAt: habit.createdAt,
      successRate: calculateSuccessRate(habit),
      consistency: calculateConsistency(habit),
    }));

    // Prepare data for machine learning model
    const inputData = habitData.map((data) => [
      data.successRate,
      data.consistency,
    ]);
    const outputData = habitData.map((data) => calculateOutcome(data));

    // Convert input and output data to Tensor format
    const inputs = tf.tensor2d(inputData);
    const outputs = tf.tensor2d(outputData);

    // Define and train the model
    const model = createModel();
    await model.fit(inputs, outputs, { epochs: 50 });

    // Make predictions
    const predictions = model.predict(inputs);

    // Return predictions and habit data
    return {
      predictions: predictions.arraySync(),
      habitData,
    };
  } catch (error) {
    console.error('Error analyzing habit patterns:', error);
    throw error;
  }
};

// Helper functions to calculate success rate, consistency, and outcome
const calculateSuccessRate = (habit) => (habit.completed / habit.total) * 100 || 0;
const calculateConsistency = (habit) => (habit.trackedDays / 30) * 100 || 0;
const calculateOutcome = (data) => (data.successRate + data.consistency) / 2;

// Create the machine learning model
const createModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 10, inputShape: [2], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'linear' }));

  model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });
  return model;
};

module.exports = { analyzeHabitPatterns };
 