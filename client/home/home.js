function addGreetingTo(selection) {
  const url = new URL(document.location.href);
  const name = url.searchParams.get('name');
  const element = document.querySelector(selection);
  element.innerHTML = `Welcome ${displayName(name)}!`;
}

function displayName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

module.exports.addGreetingTo = addGreetingTo;
