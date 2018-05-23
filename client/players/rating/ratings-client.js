const config = require('./config');
const host = window.location.protocol + '//' + window.location.hostname;
const port = window.location.port;
const base = port ? host + ':' + port : host;

function getRatingFor(id, callback) {
  // Hint: If you are using fetch (which you should!) for the HTTP request, 
  // then you must (well... should) use
  //
  //   options.credentials = 'same-origin'
  //
  // to include the auth-cookie with the request.
}

function update(id, value, callback) {
  // Hint: If you are using fetch (which you should!) for the HTTP request, 
  // then you must (well... should) use
  //
  //   options.credentials = 'same-origin'
  //
  // to include the auth-cookie with the request.
}

module.exports.getRatingFor = getRatingFor;
module.exports.update = update;
