function addGreetingTo(target) {
  const targetName = document.querySelector(target);
  let name = window.location.search.substring(6);

  //If name is not empty replace numbers with empty string
  name ? (name = name.replace(/[0-9]/g, '')) : null;

  //If name still is not empty print it to the page
  name
    ? (targetName.textContent = `Welcome ${name
      .charAt(0)
      .toUpperCase()}${name.slice(1)}!`)
    : null;
}

module.exports.addGreetingTo = addGreetingTo;
