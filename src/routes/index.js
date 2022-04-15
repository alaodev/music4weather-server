const music4Weather = require('./music4WeatherRoute');

module.exports = app => {
  app.use(music4Weather);
}