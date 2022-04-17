const axios = require('axios');

const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

module.exports = {
  getWeatherByCoordinates
}