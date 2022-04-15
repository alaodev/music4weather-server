const axios = require('axios');

const getWeatherByCoordinates = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`
  const { data } = await axios.get(url);
  console.log(data);
  return null;
}

module.exports = {
  getWeatherByCoordinates
}