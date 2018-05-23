const url = require('url');

function create(service) {

  return {
    route: (req, res) => {
      // Hint: Split request into two subroutes depending on request path.
      // Hint: Check HTTP method type on request. Only allow GET methods.
      res.statusCode = 500;
      res.end('Not Implemented!');
    }
  };
}

module.exports.create = create;
