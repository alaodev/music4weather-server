const { Router } = require('express');
const { 
  getMusic4WeatherByCoordinates
} = require('../controllers/music4WeatherController');

const router = Router();

router.get('/music4weather/:lat/:lon', getMusic4WeatherByCoordinates);

module.exports = router;