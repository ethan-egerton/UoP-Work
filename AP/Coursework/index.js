// Declaration
let wordsObj = {};
let topic = ""
let wordArray = []
let splitWords = []
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let playerScore = 0

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
    document.getElementById('topic-display').classList.add('display-none');
    document.getElementById('btn-start').classList.add('display-none');
    document.getElementById('topics').classList.add('display-none');
    document.getElementById('letter-display').classList.remove('display-none');
    document.getElementById('btn-end').classList.remove('display-none');
    document.getElementById('keyboard').classList.remove('display-none')
}

function endToggle() {
    document.getElementById('topic-display').classList.remove('display-none');
    document.getElementById('btn-start').classList.remove('display-none');
    document.getElementById('topics').classList.remove('display-none');
    document.getElementById('letter-display').classList.add('display-none');
    document.getElementById('btn-end').classList.add('display-none');
    document.getElementById('keyboard').classList.add('display-none')
}

// Word Display 
function clearWordDisplay() {
    const element = document.getElementById("letter-display")
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
}

function removeKeyColours() {
    const reds = document.getElementsByClassName('btn-red');
    const greens = document.getElementsByClassName('btn-green');
    Array.from(reds).forEach(element => {
        element.classList.remove('btn-red');});
    Array.from(greens).forEach(element => {
        element.classList.remove('btn-green');});
}

// Word Selecting
function selectTopic(event) {
    topic = event.currentTarget.id;
    document.getElementById("topic-selected").textContent = topic;
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
    const letter = event.currentTarget.textContent;
    if (splitWords.includes(letter)) {
        event.currentTarget.classList.add('btn-green');
        let letters = document.getElementsByClassName(letter)
        Array.from(letters).forEach(element => {
        element.textContent = letter;});
    } else {
        console.log("not it")
        event.currentTarget.classList.add('btn-red');
        event.currentTarget.removeEventListener('click', checkLetters);
        playerScore += 1;
    }
    canvasBuild(playerScore);
}

// Start / End
function keyboardEventReset() {
    let keyboardButtons = document.getElementsByClassName('btn-keyboard')
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
    splitWords = word.split("");
    for (let i = 0; i < splitWords.length; i++) {
        const letter = splitWords[i];
        let eleLetter = document.createElement("SPAN");
        eleLetter.textContent = String.fromCharCode(160);
        eleLetter.className = "letter";
        eleLetter.classList.add(letter)
        document.getElementById('letter-display').append(eleLetter);
        }
}

function endGame() {
    endToggle();
    removeKeyColours();
}

function canvasBuild(score) {
    console.log("func ran")
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
            break;
    }
    console.log("func ends")
}

document.getElementById('btn-start').addEventListener('click', startGame)
document.getElementById('btn-end').addEventListener('click', endGame)
document.getElementById('food').addEventListener('click', selectTopic);
document.getElementById('music').addEventListener('click', selectTopic);