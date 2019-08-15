const playersHttpClient = process.env.NODE_ENV === 'production' ? 
  require('./remote-players-client') :
  require('./remote-players-client.mock');

module.exports.playersHttpClient = playersHttpClient;
