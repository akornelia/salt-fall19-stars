const fs = require('fs');

const filePath = `${__dirname}/ratings.json`;

function getRatingFor(key, callback) {
  const defaultRating = 3;

  fs.readFile(filePath, 'utf8', (err, d) => {
    if (err) {
      return console.log(err);
    }
    const [user, id] = key.split(':');
    const data = JSON.parse(d);
    if (!(data && data[user] && data[user][id])) {
      callback({rating: defaultRating});
    } else {
      callback(data[user][id]);
    }
  });
}

function update(key, value, callback) {
  fs.readFile(filePath, 'utf8', (err, d) => {
    if (err) {
      return console.log(err);
    }
    const [user, id] = key.split(':');
    const data = d ? JSON.parse(d) : {};
    data[user] = data[user] ? data[user] : {};
    data[user][id] = data[user][id] ? data[user][id] : {};
    data[user][id] = value;
    try {
      fs.writeFileSync(filePath, JSON.stringify(data));
    } catch (e) {
      return console.log(err);
    }
    callback(data[user][id]);
  });
}

module.exports.getRatingFor = getRatingFor;
module.exports.update = update;