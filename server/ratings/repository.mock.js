function getRatingFor(key, callback) {
  console.log('MOCK', 'get ratings for', key);
  callback({rating: 2});
}

function update(key, value, callback) {
  console.log('MOCK', 'update', key, 'with', value);
  callback(value);
}

module.exports.getRatingFor = getRatingFor;
module.exports.update = update;
