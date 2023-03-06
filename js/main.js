'use strict';

                    // Funzioni 

//Funzione numeri random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
//Funzione per creare elementi
function elementCreator(htmlElement,className,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;    
    return element;
}
//Funzione per appendere elementi in html
function myAppendElement(containerElement,htmlElement){
    containerElement.append(htmlElement);
}
//Funzione per prompt utente
function userInput(){
    let userArray=[];
    for(let i=0;i<5; i++){
    const userNum = Number(prompt('Inserisci un numero'));
    userArray.push(userNum);
    }
    console.log(userArray);
}
                    // Main

//Creazione Ciclo for Array numeri random
let num=[];
for(let i=0; i<5; i++){
    const randomNum = getRandomInt(1,50);
    num.push(randomNum);
}
console.log(num);
//Creazione timeout 30s per poi inserire 5 prompt
userInput();
