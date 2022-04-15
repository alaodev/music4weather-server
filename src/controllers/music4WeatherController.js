const services = require('../services');

const getMusic4WeatherByCoordinates = async (req, res) => {
  const { lat, lon } = req.params;
  try {
    await services.weather.getWeatherByCoordinates(lat, lon)
    return null;
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

module.exports = {
  getMusic4WeatherByCoordinates
}