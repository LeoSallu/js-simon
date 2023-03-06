'use strict';

// Funzioni 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
//function myCreateElement(htmltag, content)






// Main

const numBox= document.querySelector('.list');

for(let i=0; i<5; i++){
    let number = getRandomInt(1, 50);
    console.log(number);
}
