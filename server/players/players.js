const url = require('url');

function create(service) {

  return {
    route: (req, res) => {

      const path = normalize(req.url);

      if (path === '/') {

        switch(req.method) {

          case 'GET':
            service.all(data => ok(res, data));
            break;

          default:
            methodNotAllowed(res);
        }

      } else {

        const id = path
          .slice(1)
          .replace('/', '');

        switch(req.method) {

          case 'GET':
            service.get(id, data => ok(res, data));
            break;

          default:
            methodNotAllowed(res);
        }
      }

    }
  };
}

function normalize(path) {
  return url.parse(path)
    .pathname
    .replace(/\/+$/, '')
    .replace('/api/players', '/');
}

function ok(res, data) {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(data));
}

function methodNotAllowed(res) {
  res.statusCode = 405;
  res.setHeader('Allow', 'GET');
  res.end();
}

module.exports.create = create;
