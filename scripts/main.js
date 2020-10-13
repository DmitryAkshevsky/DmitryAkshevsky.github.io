let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ева.jpg') {
        myImage.setAttribute('src','images/аска.jpg');
    } else {
        myImage.setAttribute('src','images/ева.jpg')
    }
}

let myButton = document.querySelector('button');

myButton.onclick = function() {
    setUserName();
}

let myHeading = document.querySelector('h1');

function setUserName() {
    let myName  = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'NEON GENESIS EVANGELION, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'NEON GENESIS EVANGELION, ' + myName;
}

