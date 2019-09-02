function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function addGreetingTo(query) {
  const urlParams = new URLSearchParams(document.location.search);
  const name = urlParams.get('name');
  if (name) {
    document.querySelector(query).innerHTML = 'Welcome ' + capitalize(name) + '!';
  }
}

module.exports.addGreetingTo = addGreetingTo;
