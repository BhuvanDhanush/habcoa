import React, { useContext, useEffect } from 'react';
import './App.css';
import HabitTracker from './components/HabitTracker';
import Motivation from './components/Motivation';
import UserProfile from './components/UserProfile';
import HabitHistory from './components/HabitHistory';
import { UserContext } from './context/usercontext';
import { fetchUserData } from './services/api';

const App = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const loadUserData = async () => {
      const data = await fetchUserData();
      setUser(data);
    };

    loadUserData();
  }, [setUser]);

  return (
    <div className="App">
      <h1>HabitCoach</h1>
      <UserProfile user={user} />
      <HabitTracker />
      <Motivation />
      <HabitHistory />
    </div>
  );
};

export default App;