const motivationalQuotes = [
    "Believe in yourself!",
    "Stay positive, work hard, make it happen.",
    "Your only limit is your mind.",
    "Success is the sum of small efforts, repeated day in and day out.",
  ];
  
  const getRandomMotivationalQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
  };
  
  module.exports = { getRandomMotivationalQuote };
  