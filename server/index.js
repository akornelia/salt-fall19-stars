const url = require('url');
const home = require('./home');
const view = require('./static');
const notFound = require('./notFound');
const auth = require('./auth');
const login = require('./login');
const players = require('./players');

function all(req, res) {
  const path = url.parse(req.url).pathname;

  console.log(req.method, path);

  switch (true) {
    case match(path, '/'):
      validateRequest(req, res, home.route);
      break;
    case match(path, '/index'):
      home.redirect(res);
      break;
    case match(path, '/login'):
      login.redirect(res);
      break;
    case match(path, '/login.html'):
    case match(path, '/401.html'):
    case match(path, '/404.html'):
      view.route(req, res);
      break;
    case match(path, '/api/authenticate'):
      auth.route(req, res);
      break;
    case match(path, /\/api\/players.?/):
      players.route(req, res);
      break;
    default:
      validateRequest(req, res, view.route, () => notFound.route(req, res));
  }
}

function validateRequest(req, res, fn, cb) {
  return auth.validCookie(req.headers['cookie']) ? 
    fn(req, res, cb) : login.redirect(res);
}

function match(path, pattern) {
  const refinedPath = path === '/' ? path : path.replace(/\/+$/, '');
  return pattern instanceof RegExp ? 
    pattern.test(refinedPath) : refinedPath === pattern;
}

module.exports.all = all;
