const playersHttpClient = process.env.NODE_ENV === 'production' ? 
  require('./remote-players-client') :
  require('./remote-players-client.mock');

const bioHttpClient = require('./remote-bio-client.mock');

module.exports.playersHttpClient = playersHttpClient;
module.exports.bioHttpClient = bioHttpClient;
