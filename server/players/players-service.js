function PlayersService(playersClient) {
  this.playersClient = playersClient;
}

PlayersService.prototype.all = function(callback) {

  this.playersClient.fetchAll(all => {
    // Hint: Parse result with parsePerson(data) and create a new response object (JSON). Use callback to return response object.
    throw 'Not Implemented!';
  });
};

PlayersService.prototype.get = function(id, callback) {

  this.playersClient.getPlayer(id, data => {
    // Hint: Parse result (you have to create a new function, similar to parsePerson) and create response object. Use callback to return response object.
    throw 'Not Implemented!';
  });
};

function parsePerson(data) {
  return {
    name: data.name,
    eid: parseEid(data.url),
  };
}

function parseEid(url) {
  return url.replace(/\/$/, '')
    .split('/')
    .slice(-1)[0];
}

function pageNumber(p) {
  if (p) {
    return p.split('=')[1];
  }
  else return;
}

module.exports.create = remotePlayersClient => new PlayersService(remotePlayersClient);
