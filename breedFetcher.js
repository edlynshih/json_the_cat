const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(`The breed ${breedName} is not found.`, null);
      return;
    }

    if (response.statusCode === 200) {
      callback(null, data[0].description);
    }

  });
};

module.exports = { fetchBreedDescription };
