function uppcaseName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function addGreetingTo(selector) {
  let userName = document.querySelector(selector);
  let params = new URLSearchParams(document.location.search.substring(1));
  let name = params.get("name");

  if (name !== null) {
    userName.innerHTML = 'Welcome ' + uppcaseName(name) + '!';
  } else {
    userName.innerHTML = 'Welcome!';
  }
  
}


module.exports.addGreetingTo = addGreetingTo;
