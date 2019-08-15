function PlayersService(playersClient, bioClient) {
  this.playersClient = playersClient;
  this.bioClient = bioClient;
}

PlayersService.prototype.all = function(callback) {

  this.playersClient.fetchAll(all => {
    const results = all.results.map(r => parsePerson(r));

    callback({
      count: all.count,
      next: all.next ? all.next.split('=')[1] : null,
      prev: pageNumber(all.prev),
      results: results,
    });
  });
};

PlayersService.prototype.get = function(id, callback) {

  this.playersClient.getPlayer(id, data => {
    const person = parseDetails(data);

    getTeam(this.playersClient, data.homeworld, team => {
      person.team = team.name;

      this.bioClient.getBioFor(person.name, bio => {
        person.bio = bio;
        callback(person);
      });
    });
  });
};

function parsePerson(data) {
  return {
    name: data.name,
    eid: parseEid(data.url),
  };
}

function parseDetails(data) {
  return {
    name: data.name,
    gender: data.gender,
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

function getTeam(playersClient, url, callback) {
  playersClient.getTeamFor(url, callback);
}

module.exports.create = 
  (remotePlayersClient, remoteBioClient) => new PlayersService(remotePlayersClient, remoteBioClient);