const auth = require('../auth');

function create(service) {

  return {

    route: (req, res) => {

      if (!auth.validCookie(req.headers['cookie'])) {
        reject(res);
        return;
      }

      const id = extractId(req.url);
      const user = extractSignedInUser(req.headers['cookie']);
      const key = buildKey(user, id);
      if (!id || Number.isNaN(id)) {
        notFound(res);
        return;
      }

      let body = '';

      switch(req.method) {
        case 'GET':
          service.getRatingFor(key, data => ok(res, data));
          break;

        case 'PUT':
          req.on('data', chunk => {
            body += chunk;
          });

          req.on('end', () => {
            const value = JSON.parse(body);
            service.update(key, value, data => ok(res, data));
          });
          break;
        default:
          methodNotAllowed(res);
      }
    },
  };
}

function extractId(url) {
  const splits = url.split('/');
  return parseInt(splits[splits.length - 1]);
}

function extractSignedInUser(cookie) {
  if (cookie) {
    const signedIn = cookie.split(';')
      .map(t => t.split('='))
      .find(t => t[0].trim() === 'auth.status');
    return signedIn[1].split(':')[1];
  }
}

function buildKey(user, id) {
  return `${user}:${id}`;
}

function ok(res, data) {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(data));
}

function methodNotAllowed(res) {
  res.statusCode = 405;
  res.setHeader('Allow', ['GET', 'PUT']);
  res.end();
}

function notFound(res) {
  res.statusCode = 404;
  res.end();
}

function reject(res) {
  res.statusCode = 400;
  res.end();
}

module.exports.create = create;