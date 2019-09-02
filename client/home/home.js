
// this function takes the element path as an argument
function addGreetingTo(h2) {
  // set name variable from url param 'name'
  let name = new URLSearchParams(window.location.search).get('name');
  // capitalizing the first letter of the name and lowercases the rest of the name
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  // Selects the h2 and updates its innerHTML to include the name entered in the querystring
  document.querySelector(h2).innerHTML = `Welcome ${name}!`;
}

//The function is exported.
module.exports.addGreetingTo = addGreetingTo;
