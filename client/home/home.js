function addGreetingTo(target) {
  const targetName = document.querySelector(target);
  let name = new URLSearchParams(document.location.search.substring(1)).get(
    'name'
  );

  //if name is not empty replace numbers with empty string
  name ? (name = name.replace(/[0-9]/g, '')) : null;

  //If name still is not empty print it to the page
  if (name) {
    targetName.textContent =
      'Welcome ' + name.charAt(0).toUpperCase() + name.slice(1) + '!';
  }
}

module.exports.addGreetingTo = addGreetingTo;
