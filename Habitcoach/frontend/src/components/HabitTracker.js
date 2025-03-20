import React, { useState } from 'react';

const HabitTracker = () => {
  const [habit, setHabit] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to save the habit (API call)
    const response = await fetch('/api/habit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ habit, goal }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h2>Track Your Habit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter habit"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />
        <input
          type="text"
          placeholder="Set your goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">Save Habit</button>
      </form>
    </div>
  );
};

export default HabitTracker;
