'use strict';

function keyUp(e) {
    let str =inputText.value;


    let num = 10 - str.length;

    console.log(num);

    const characterCount = document.getElementById('characterCount');
    characterCount.textContent = num;
    
}
    
    

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false);


