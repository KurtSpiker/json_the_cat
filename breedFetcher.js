const request = require('request');

const breedFetcher = (inputBreed , callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${inputBreed}`,
    function(error, response, body) {
      
      const data = JSON.parse(body);

      if (error) {
        callback(error);
      } else if (data[0]) {
        callback(null, data[0].description.trim());
      } else if (!data[0]) {
        callback('Please enter a valid breed');
      }
    }
  );
};

module.exports = {breedFetcher};