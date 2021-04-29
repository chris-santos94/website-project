let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/moomins.gif') {
      myImage.setAttribute('src','images/moomins2.gif');
    } else {
      myImage.setAttribute('src','images/moomins.gif');
    }
}

// Personalized welcome message code!

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to Moominvalley, ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Moominvalley, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }