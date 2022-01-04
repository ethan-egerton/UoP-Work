// Declaration
let wordsObj = {};
let topic = ""
let wordArray = []
let splitWord = []
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let playerScore = 0
let uniqueLetters = 0
let correctLetters = 0
let wordLength = 0

// Data fetching
fetch("./words.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){ 
        wordsObj = data
    })

// Display Toggles
function startToggle() {
    clearWordDisplay()
    document.querySelector('#topic-display').classList.add('display-none');
    document.querySelector('#btn-start').classList.add('display-none');
    document.querySelector('#topics').classList.add('display-none');
    document.querySelector('#letter-display').classList.remove('display-none');
    document.querySelector('#btn-end').classList.remove('display-none');
    document.querySelector('#keyboard').classList.remove('display-none')
}

function endToggle() {
    document.querySelector('#topic-display').classList.remove('display-none');
    document.querySelector('#btn-start').classList.remove('display-none');
    document.querySelector('#topics').classList.remove('display-none');
    document.querySelector('#letter-display').classList.add('display-none');
    document.querySelector('#btn-end').classList.add('display-none');
    document.querySelector('#keyboard').classList.add('display-none')
}

// Word Display 
function clearWordDisplay() {
    const element = document.querySelector("#letter-display")
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
}

function removeKeyColours() {
    const reds = document.querySelectorAll('.btn-red');
    const greens = document.querySelectorAll('.btn-green');
    Array.from(reds).forEach(element => {
        element.classList.remove('btn-red');});
    Array.from(greens).forEach(element => {
        element.classList.remove('btn-green');});
}

// Word Selecting
function selectTopic(event) {
    topic = event.currentTarget.id;
    document.querySelector("#topic-selected").textContent = topic;
    wordArray = wordsObj[topic]
}

function randomWordGen() {
    try {
        const wordIndex = Math.floor(Math.random() * wordArray.length);
        console.log(wordArray[wordIndex]);
        return wordArray[wordIndex]
    } catch {
        console.log("could not locate array");
    }
}

// Letter Validation

function checkLetters(event) {
    // Cycles through every letter in array splitWord to check if element
    // matches the letter.
    const letter = event.currentTarget.textContent;
    let foundLetter = false;
    for (let i = 0; i < wordLength; i++) {
        if (letter = splitWord[i]) {
            correctLetters += 1
            event.currentTarget.classList.add('btn-green');
            foundLetter = true;
        }
    }
    if (foundLetter == false) {
        event.currentTarget.classList.add('btn-red');
        event.currentTarget.removeEventListener('click', checkLetters);
        playerScore += 1;
    }
    canvasBuild(playerScore);
    if (correctLetters === uniqueLetters) {GameWon()};
}

// Start / End
function keyboardEventReset() {
    const keyboardButtons = document.querySelectorAll('.btn-keyboard')
    Array.from(keyboardButtons).forEach(element => {
    element.addEventListener('click', checkLetters);
    });   
}

function startGame() {
    startToggle()
    keyboardEventReset();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const word = randomWordGen();
    playerScore = 0;
    canvasBuild();

    // Set letters in word display
    splitWord = word.split("");
    for (let i = 0; i < splitWord.length; i++) {

        let eleLetter = document.createElement("SPAN");
        eleLetter.textContent = String.fromCharCode(160);
        eleLetter.className = "letter";
        eleLetter.classList.add(i)
        document.querySelector('#letter-display').append(eleLetter);
        }

    // Count unique letters
    // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    uniqueLetters = splitWord.filter((v, i, splitWord) => splitWord.indexOf(v) === i).length;
    wordLength = splitWord.length;
}

function GameWon() {
    endToggle();
    removeKeyColours();
}

function GameLost() {
    endToggle();
    removeKeyColours();
}

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
            // Hang beam
            ctx.fillRect(25, 15, 132, 10);
            break;
        case 5:
            // Support beam
            break;
        case 6:
            // Rope
            ctx.fillRect(152, 15, 5, 40);
            break;
        case 7:
            // Head
            ctx.beginPath();
            ctx.arc(154, 85, 30, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        case 8:
            // Body
            ctx.fillRect(153, 115, 2, 90);
            break;
        case 9:
            // R Arm
            ctx.beginPath();
            ctx.moveTo(153,120);
            ctx.lineTo(170,160);
            ctx.stroke();
            break;
        case 10:
            // L Arm
            ctx.beginPath();
            ctx.moveTo(155,120);
            ctx.lineTo(136,160);
            ctx.stroke();
            break;
        case 11:
            // R Leg
            ctx.beginPath();
            ctx.moveTo(153,203);
            ctx.lineTo(170,243);
            ctx.stroke();
            break;
        case 12:
            // L Leg
            ctx.beginPath();
            ctx.moveTo(155,203);
            ctx.lineTo(136,243);
            ctx.stroke();
            GameLost();
            break;
    }
}

document.querySelector('#btn-start').addEventListener('click', startGame)
document.querySelector('#btn-end').addEventListener('click', GameLost)
document.querySelector('#food').addEventListener('click', selectTopic);
document.querySelector('#music').addEventListener('click', selectTopic);
