const assert = require('assert');
const http = require('http');
const ratings = require('./ratings.js');

describe('The Ratings Resource', () => {

  const base = 'http://localhost';
  const options = { address: base };

  let server, api;
  const id = '4';
  const value = 3;
  const player = 'joe';
  const key = `${player}:${id}`;

  const service = {
    getRatingFor: (x, callback) => x === key ? callback({rating: value}) : callback({}),
    update: (key, value, callback) => callback(value),
  };

  beforeEach(() => {
    api = ratings.create(service);
    server = http.createServer((req, res) => api.route(req, res));
    server.listen(0);

    options.port = server.address().port;
    options.path = '/api/ratings/' + id;
    options.method = 'GET';
    options.headers = {
      cookie: `foo=bar;auth.status=signedin:${player};baz=qox`,
    };
  });

  it('should respond with 405 when method is not GET or PUT', (done) => {
    options.method = 'DELETE';
    http.request(options, res => {
      assert.equal(res.statusCode, 405);
      assert(res.headers['allow'].includes('GET'));
      assert(res.headers['allow'].includes('PUT'));
      done();
    }).end();
  });

  it('should respond with not found when there was no match', (done) => {
    options.path = '/api/ratings/notFound';
    http.request(options, res => {
      assert.equal(res.statusCode, 404);
      done();
    }).end();
  });

  it('should respond with ok when there was a match', (done) => {
    http.request(options, res => {
      assert.equal(res.statusCode, 200);
      done();
    }).end();
  });

  it('should respond with rating', (done) => {
    http.request(options, res => {

      const body = [];

      res.on('data', chunk => {
        body.push(chunk);
      });

      res.on('end', () => {
        const result = JSON.parse(body.join(''));
        assert.equal(result.rating, value);
        done();
      });
    }).end();
  });

  it('should respond with content type application/json', (done) => {
    http.request(options, res => {
      assert.equal(res.headers['content-type'], 'application/json');
      done();
    }).end();
  });

  it('should respond with ok to update', (done) => {
    options.method = 'PUT';
    const req = http.request(options, res => {
      assert.equal(res.statusCode, 200);
      done();
    });

    const data = { rating: 1 };
    req.write(JSON.stringify(data));
    req.end();
  });

  it('should respond with updated entity', (done) => {
    options.method = 'PUT';
    const req = http.request(options, res => {
      const body = [];

      res.on('data', chunk => {
        body.push(chunk);
      });

      res.on('end', () => {
        const json = JSON.parse(Buffer.concat(body).toString());
        assert.equal(json['rating'], 1, json);
        done();
      });
    });

    const data = { rating: 1 };
    req.write(JSON.stringify(data));
    req.end();
  });

  it('should reject requests without auth-cookie', (done) => {
    delete options.headers['cookie'];

    http.request(options, res => {
      assert.equal(res.statusCode, 400);
      done();
    }).end();
  });
});
