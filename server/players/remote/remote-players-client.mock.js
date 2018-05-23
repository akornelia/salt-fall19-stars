function fetchAll(callback) {
  console.log('MOCK', 'fetch all players');
  callback({
    results: [
      {
        url: 'http://hocus.pucus/1/',
        name: 'joe',
      },
      {
        url: 'http://hocus.pucus/2/',
        name: 'jane',
      },
    ],
  });
}

function getPlayer(id, callback) {
  console.log('MOCK', 'get player', id);
  callback({
    name: 'some player name',
    gender: 'male',
  });
}

module.exports.fetchAll = fetchAll;
module.exports.getPlayer = getPlayer;
