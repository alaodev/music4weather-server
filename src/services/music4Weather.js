const { getWeatherByCoordinates } = require('../services/weather');
const { getPlaylistByTemperature } = require('../services/music');

const getMusic4WeatherByCoordinates = async (lat, lon) => {
  try {
    const weather = await getWeatherByCoordinates(lat, lon);
    const playlist = await getPlaylistByTemperature(weather.main.temp);
    return {playlist, temperature: weather.main.temp};
  } catch (e) {
    console.error(e);
    throw e;
  }
}

module.exports = {
  getMusic4WeatherByCoordinates
}