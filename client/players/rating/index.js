const client = require('./ratings-client');
const rating = require('./rating').create(client);
module.exports = rating;
