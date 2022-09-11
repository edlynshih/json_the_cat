const request = require('request');
let breedName = process.argv.slice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

request(url, (error, response, body) => {

  if (error) {
    console.log("error: ", error);
    return;
  }

  const data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log(`The breed ${breedName} is not found.`);
    return;
  }

  if (response.statusCode === 200) {
    console.log(data[0].description);
  }
  
});
