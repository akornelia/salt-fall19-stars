function addGreetingTo() {
  //  throw new Error('Not Implemented!');
  const myName = new URLSearchParams(window.location.search).get('name');
  const myGreeting = document.querySelector('.greeting > h2');
  const myNameCap = myName.charAt(0).toUpperCase() + myName.slice(1);

  myGreeting.textContent = `Welcome ${myNameCap}!`;
}

module.exports.addGreetingTo = addGreetingTo;
