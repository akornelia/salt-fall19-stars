// We access the home.js..
const home = require('./home');
//... and call the addGreeting function with the h2 descendant of .greeting as an argument
home.addGreetingTo('.greeting > h2');
