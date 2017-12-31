var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=146d2d21e0736f8a8b62fa0b247cf18d&units=imperial';

//146d2d21e0736f8a8b62fa0b247cf18d

module.exports = {
  getTemperature: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl)
      .then(function(response) {
        if(response.data.cod && response.data.message) {
          throw new Error('Unable to fetch weather');
        } else {
          return response.data.main.temp;
        }
      }).catch(function(error) {
        throw new Error(error.response.data.message);
      });
  }
}
