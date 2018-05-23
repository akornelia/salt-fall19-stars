const qs = require('querystring');

const create = authenticate => {
  return {
    route: (req, res) => {

      switch (req.method) {

        case 'POST': 
          handlePost(req, res, authenticate);
          break;

        default:
          handleNotAllowed(req, res);
      }
    }
  };
};

function handlePost(req, res, authenticate) {
  let body = '';

  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      authenticate(body, ok => {
        handleFormResponse(ok, body, res).end();
      });
    });

  } else {
    res.statusCode = 415;
    res.end();
  }
}

function handleNotAllowed(req, res) {
  res.statusCode = 405;
  res.setHeader('Allow', 'POST');
  res.end();
}

function handleFormResponse(ok, body, res) {
  if (ok) {
    res.setHeader('set-cookie', createCookie(body));
    res = redirectTo(res, '/');
  } else {
    res = redirectTo(res, '/401.html');
  }
  return res;
}

function createCookie(body) {
  const username = qs.parse(body).username;

  if (username) {
    return `auth.status=signedin:${username};path=/`;
  } else {
    throw 'Failed to parse requrest';
  }
}

function redirectTo(res, path) {
  res.statusCode = 302;
  res.setHeader('location', path);
  return res;
}

module.exports.create = create;
