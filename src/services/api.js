import axios from 'axios';

const API_KEY = '6b659e45f861f80c9752d1215c85ed74';  // Replace with your actual OpenWeatherMap API key
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    return response.data.list;
  } catch (error) {
    console.error('Error fetching data:', error.message);
   
  }}