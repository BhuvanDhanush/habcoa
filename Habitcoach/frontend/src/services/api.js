export const fetchUserData = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
  };
  
  export const getMotivationalQuote = async () => {
    const response = await fetch('/api/motivation');
    const data = await response.json();
    return data.quote;
  };
  