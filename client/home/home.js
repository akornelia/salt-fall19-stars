function sanitize(s) {
  
  s = s.replace(/[0-9]/g, '');
  let dashPosition = s.search('-');
  let sanitizeName = '';
  let toBeInserted;

  do {
    if (dashPosition !== -1) {
      toBeInserted = s.slice(0, dashPosition + 1);
      toBeInserted = toBeInserted[0].toUpperCase() + toBeInserted.slice(1).toLowerCase();
      s = s.slice(dashPosition + 1);
      dashPosition = s.search('-');
      sanitizeName += toBeInserted;
      if(dashPosition == -1) {
        toBeInserted = s[0].toUpperCase() + s.slice(1).toLowerCase();
        sanitizeName += toBeInserted;
      }
    } else {
      toBeInserted = s[0].toUpperCase() + s.slice(1).toLowerCase();
      sanitizeName += toBeInserted;
    } 
  }
  while (dashPosition !== -1);
  return sanitizeName;
}

function addGreetingTo(query) {
  const urlParams = new URLSearchParams(document.location.search);
  const name = urlParams.get('name');
  if (name) {
    document.querySelector(query).innerHTML = 'Welcome ' + sanitize(name) + '!';
  }
}

module.exports.addGreetingTo = addGreetingTo;
module.exports.sanitize = sanitize;
