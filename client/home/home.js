function addGreetingTo(elem) {
  //  throw new Error('Not Implemented!');
  const myName = new URLSearchParams(window.location.search).get('name');
  const myGreeting = document.querySelector(elem);
  const myNameCap = myName.charAt(0).toUpperCase() + myName.slice(1);
  if (myName != '') {
    myGreeting.textContent = `Welcome ${myNameCap}!`;
  } else {
    myGreeting.textContent = 'Welcome!';
  }
}

module.exports.addGreetingTo = addGreetingTo;
