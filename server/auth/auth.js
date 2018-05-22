const qs = require('querystring'); // Hint: It's not necessary to use this package, but it makes parsing the html form body significantly easier. [ qs.parse(querystring) ]

const create = authenticate => {
  return {
    route: (req, res) => {
      // Hints: HTTP method? HTTP header 'content-type'?
      throw 'Not Implemented!';
    }
  };
};

module.exports.create = create;
