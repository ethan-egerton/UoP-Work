import * as ui from './ui.mjs'; 

// Decloration
let splitWord = []
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let playerScore = 0
let correctLetters = 0
let wordLength = 0

// Letter Validation

function checkLetters(event) {
    // Cycles through every letter in array splitWord to check if element
    // matches the letter.
    const letter = event.currentTarget.textContent;
    let foundLetter = false;
    for (let i = 0; i < wordLength; i++) {
        if (letter == splitWord[i]) {
            correctLetters += 1
            event.currentTarget.classList.add('btn-correct');
            document.querySelector("#letter-" + i).textContent = splitWord[i];
            foundLetter = true;
            event.currentTarget.removeEventListener('click', checkLetters);
        }
    }
    if (foundLetter == false) {
        event.currentTarget.classList.add('btn-wrong');
        event.currentTarget.removeEventListener('click', checkLetters);
        playerScore += 1;
    }
    canvasBuild(playerScore);
    if (correctLetters === wordLength) {gameWon()};
}


// Start / End

// Adds the checkLetters func back onto the buttons
function keyboardEventReset() {
    const keyboardButtons = document.querySelectorAll('.btn-keyboard')
    Array.from(keyboardButtons).forEach(element => {
    element.addEventListener('click', checkLetters);
    });   
}

function randomWordGen() {
    try {
        const wordIndex = Math.floor(Math.random() * ui.wordArray.length);
        return ui.wordArray[wordIndex]
    } catch {
        console.log("could not locate array");
    }
}

export function startGame() {
    ui.startToggle()
    keyboardEventReset();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const word = randomWordGen();
    playerScore = 0;
    correctLetters = 0;

    canvasBuild();

    // Set letters in word display
    splitWord = word.split("");
    for (let i = 0; i < splitWord.length; i++) {
        let eleLetter = document.createElement("SPAN");
        eleLetter.textContent = String.fromCharCode(160);
        eleLetter.className = "letter";
        eleLetter.id = "letter-" + i
        document.querySelector('#letter-display').append(eleLetter);
        }
    wordLength = splitWord.length;
    console.log(wordLength);
}

 function gameWon() {
    ui.endToggle();
    ui.removeKeyColours();
}

export function gameLost() {
    ui.endToggle();
    ui.removeKeyColours();
}

// Word Display 

function canvasBuild(score) {
    switch(score){
        case 1:
            // Base
            ctx.fillStyle = 'black';
            ctx.fillRect(10, 275, 100, 15);
            break;
        case 2:
            // Pole
            ctx.fillRect(25, 15, 10, 260);
            break;
        case 3:
            // Hang beam
            ctx.fillRect(25, 15, 132, 10);
            break;
        case 4:
            // Rope
            ctx.fillRect(152, 15, 5, 40);
            break;
        case 5:
            // Head
            ctx.beginPath();
            ctx.arc(154, 85, 30, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        case 6:
            // Body
            ctx.fillRect(153, 115, 2, 90);
            break;
        case 7:
            // R Arm
            ctx.beginPath();
            ctx.moveTo(153,120);
            ctx.lineTo(170,160);
            ctx.stroke();
            break;
        case 8:
            // L Arm
            ctx.beginPath();
            ctx.moveTo(155,120);
            ctx.lineTo(136,160);
            ctx.stroke();
            break;
        case 9:
            // R Leg
            ctx.beginPath();
            ctx.moveTo(153,203);
            ctx.lineTo(170,243);
            ctx.stroke();
            break;
        case 10:
            // L Leg
            ctx.beginPath();
            ctx.moveTo(155,203);
            ctx.lineTo(136,243);
            ctx.stroke();
            gameLost();
            break;
    }
}
