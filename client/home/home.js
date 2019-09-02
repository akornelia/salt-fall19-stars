function addGreetingTo(selector) {
  //throw new Error('Not Implemented!');

  const element = document.querySelector(selector);
  const name = window.location.search.replace('?name=','');
  let output;

  if (name) {
    output = 'Welcome ' + name.charAt(0).toUpperCase() + name.substring(1, name.length) + '!';
  } else {
    output = 'Welcome!';
  }

  element.innerHTML = output;
}

module.exports.addGreetingTo = addGreetingTo;
