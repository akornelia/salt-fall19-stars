function create(service) {

  return {
    route: (req, res) => {

      res.statusCode = 500;
      res.end('Not Implemented!');
    },
  };
}

module.exports.create = create;
