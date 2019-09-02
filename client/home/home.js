// this function takes the element path as an argument
function addGreetingTo(h2) {
  // set name variable from url param 'name'
  let urlParams = new URLSearchParams(window.location.search);
  let params = {
    name: urlParams.get('name'),
    age: urlParams.get('age')
  };

  console.log(urlParams);
  // capitalizing the first letter of the name and lowercases the rest of the name
  const sentence =
    params.name && params.age
      ? ' ' +
        params.name.charAt(0).toUpperCase() +
        params.name.slice(1).toLowerCase() +
        ', your age is ' +
        params.age
      : '';
  // Selects the h2 and updates its innerHTML to include the name entered in the querystring
  document.querySelector(h2).innerHTML = `Welcome${sentence}!`;
  console.log(window.location.search);
}

//The function is exported.
module.exports.addGreetingTo = addGreetingTo;
