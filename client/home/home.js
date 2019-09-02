function addGreetingTo(selector) {
  const element = document.querySelector(selector);
  const name = window.location.search.replace('?name=','');
  
  const output = name 
    ? 'Welcome ' + name.charAt(0).toUpperCase() + name.substring(1, name.length) + '!'
    : 'Welcome!' ;

  element.innerHTML = output;
}

module.exports.addGreetingTo = addGreetingTo;
