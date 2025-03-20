// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with the actual backend URL

export const fetchMotivationalQuote = () => {
  return axios.get(`${API_URL}/motivational-quote`);
};
