'use strict';

// Funzioni 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
function elementCreator(htmlElement,className,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;    
    return element;
}
function myAppendElement(containerElement,htmlElement){
    containerElement.append(htmlElement);
}


// Main
const list = document.querySelector('.list');
for(let i=0; i<5; i++){
const randomNum = elementCreator('li','list-element', getRandomInt(1,50));
myAppendElement(list, randomNum);
}


