const https = require('https');
const formatter = require('./wikip-formatter');

const base = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&redirects=true&titles=';

function getBioFor(title, callback) {

  https.get(base + formatter.wikiTitle(title), res => {

    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      const response = JSON.parse(data);
      callback(formatter.parse(response));
    });
  });
}

module.exports.getBioFor = getBioFor;
