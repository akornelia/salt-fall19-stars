function PlayersService(playersClient) {
  this.playersClient = playersClient;
}

PlayersService.prototype.all = function(callback) {

  this.playersClient.fetchAll(all => {
    // Hint: Parse result and create response object. Use callback to return response object.
    throw 'Not Implemented!';
  });
};

PlayersService.prototype.get = function(id, callback) {

  this.playersClient.getPlayer(id, data => {
    // Hint: Parse result and create response object. Use callback to return response object.
    throw 'Not Implemented!';
  });
};

module.exports.create = remotePlayersClient => new PlayersService(remotePlayersClient);
