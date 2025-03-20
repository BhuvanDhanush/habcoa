import React, { useEffect, useState } from 'react';
import { getMotivationalQuote } from '../services/api';

const Motivation = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const data = await getMotivationalQuote();
      setQuote(data);
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Stay Motivated</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Motivation;
