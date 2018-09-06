// Not Implemented!
//
// Hint: This module should have the same interface as the mock module.
// Hint: Use the 'people' endpoint in SWAPI (https://swapi.co/api/).
const https = require('https');

const base = '<url_to_swapi_api>';

function fetchAll(callback) {
  // Hint: Use the get(path, callback) function below with path to fetch all from SWAPI
}

function getPlayer(id, callback) {
  // Hint: Use the get(path, callback) function below with path to fetch by id from SWAPI
}

function get(path, callback) {

  https.get(path, res => {

    res.on('data', chunk => {
     	throw 'Not Implemented!';
    });

    res.on('end', () => {
    	throw 'Not Implemented!';
    });
  });
}

module.exports.fetchAll = fetchAll;
module.exports.getPlayer = getPlayer;
