const repository = process.env.NODE_ENV === 'production' ? 
  require('./repository.js') :
  require('./repository.mock.js');

const ratings = require('./ratings.js').create(repository);

module.exports.route = ratings.route; 
