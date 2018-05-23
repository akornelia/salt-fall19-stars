const https = require('https');

const base = 'https://swapi.co/api/';

function fetchAll(callback) {
  get(base + 'people/', callback);
}

function getPlayer(id, callback) {
  get(base + 'people/' + id + '/', callback);
}

function get(path, callback) {

  https.get(path, res => {
    
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      callback(JSON.parse(data));
    });
  });
}

module.exports.fetchAll = fetchAll;
module.exports.getPlayer = getPlayer;
