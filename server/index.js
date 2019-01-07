const url = require('url');
const home = require('./home');
const view = require('./static');
const notFound = require('./notFound');

function all(req, res) {
  const path = url.parse(req.url).pathname;

  console.log(req.method, path);

  switch (true) {
    case match(path, '/'):
      home.route(req, res);
      break;
    case match(path, '/index'):
      home.redirect(res);
      break;
    default:
      view.route(req, res, () => notFound.route(req, res));
  }
}

function match(path, pattern) {
   const refinedPath = path === '/' ? path : path.replace(/\/+$/, '');
  return pattern instanceof RegExp ?
    pattern.test(refinedPath) : refinedPath === pattern;
}

module.exports.all = all;
