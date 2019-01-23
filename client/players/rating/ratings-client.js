const config = require('./config');
const host = window.location.protocol + '//' + window.location.hostname;
const port = window.location.port;
const base = port ? host + ':' + port : host;

function getRatingFor(id, callback) {
  fetch(base + config.resource_path + '/' + id)
    .then(res => res.json())
    .then(json => callback(json));
}

function update(id, value, callback) {
  const body = JSON.stringify({ rating: value });
  const method = 'PUT';
  fetch(base + config.resource_path + '/' + id, { method, body})
    .then(res => res.json())
    .then(() => callback());
}

module.exports.getRatingFor = getRatingFor;
module.exports.update = update;
