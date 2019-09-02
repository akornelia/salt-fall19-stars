function addGreetingTo(target) {
  const targetName = document.querySelector(target);
  let name = new URLSearchParams(document.location.search.substring(1)).get(
    'name'
  );

  if (name) {
    targetName.textContent =
      'Welcome ' + name.charAt(0).toUpperCase() + name.slice(1) + '!';
  }
}

module.exports.addGreetingTo = addGreetingTo;
