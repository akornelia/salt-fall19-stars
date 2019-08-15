const playersService = require('./players-service');
const playersClient = require('./remote').playersHttpClient;
const bioClient = require('./remote').bioHttpClient;
const players = require('./players');

const service = playersService.create(playersClient, bioClient);

module.exports.route = players.create(service).route;
