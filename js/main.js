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
    for(let i=0;i<5; i++){
    const userNum = Number(prompt('Inserisci un numero'));
    userArray.push(userNum);
    }
    console.log(userArray);
}
//Confronto array
function confrontoArray(){
for(let i=0;i<5;i++){
    if(userArray===num){
        arrayWin.push(userArray);
        console.log('Hai vinto');
    }
    else{
        console.log('Non hai vinto nulla');
    }
}
}
                    // Main
//Creazione Ciclo for Array numeri random
let num=[];
const ulist = document.querySelector('.list');
for(let i=0; i<5; i++){
    const randomNum = getRandomInt(1,90);
    num.push(randomNum);
    let list = elementCreator('li','list-item', num[i]);
    myAppendElement('list',list);
}
console.log(num);
//Creazione timeout 30s per poi inserire 5 prompt
// let userArray=[];
setTimeout(userInput, 30000);
//Confronto array
let arrayWin='';
//setTimeout(confrontoArray,500);