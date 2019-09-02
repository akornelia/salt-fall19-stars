function addGreetingTo() {
  const userName = window.location.href.split("=").slice(-1)[0];
  if(!(userName === '' || userName === window.location.href)){
    document.querySelector('.greeting > h2').innerHTML = 'Welcome ' + userName.charAt(0).toUpperCase() + userName.slice(1) + "!";
  } 
}

//working
/* const userName = window.location.href.split("=").slice(-1)[0];
if(userName === '' || userName === window.location.href){
  //document.querySelector('.greeting > h2').innerHTML;
} 
else {
    document.querySelector('.greeting > h2').innerHTML = 'Welcome ' + userName.charAt(0).toUpperCase() + userName.slice(1) + "!";
  }
} */



module.exports.addGreetingTo = addGreetingTo;
