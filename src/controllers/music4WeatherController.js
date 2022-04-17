const services = require('../services');

const getMusic4WeatherByCoordinates = async (req, res) => {
  const { lat, lon } = req.params;
  try {
    const playlist = await services.music4Weather.getMusic4WeatherByCoordinates(lat, lon);
    res.status(200).send(playlist);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

module.exports = {
  getMusic4WeatherByCoordinates
}