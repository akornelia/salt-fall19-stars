const players = require('./players');
const rating = require('./rating');

const client = require('./players-client');

const appendToDom =
  data => players.appendTo(document.querySelector('#players-list'), data);

client.fetchPlayers(appendToDom);

const addPlayerData = id => {
  client.getPlayer(String(id), (json) => {
    players.playerData(document.querySelector('#player'), id, json);
    rating.appendTo('#ratings-container', id);
  });
};

window.addPlayerData = addPlayerData;

players.ifIdExist(window.location.hash, id => addPlayerData(id));
