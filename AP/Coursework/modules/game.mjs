// Decloration
let wordArray = []
let splitWord = []
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let playerScore = 0
let uniqueLetters = 0
let correctLetters = 0
let wordLength = 0


// Display Toggles
function startToggle() {
    clearWordDisplay()
    document.querySelector('#topic-display').classList.add('display-none');
    document.querySelector('#btn-start').classList.add('display-none');
    document.querySelector('#btn-multi').classList.add('display-none');
    document.querySelector('#btn-comp').classList.add('display-none');
    document.querySelector('#btn-settings').classList.add('display-none');
    document.querySelector('#btn-history').classList.add('display-none');
    document.querySelector('#topics').classList.add('display-none');
    document.querySelector('#letter-display').classList.remove('display-none');
    document.querySelector('#btn-end').classList.remove('display-none');
    document.querySelector('#keyboard').classList.remove('display-none');
}

function endToggle() {
    document.querySelector('#topic-display').classList.remove('display-none');
    document.querySelector('#btn-start').classList.remove('display-none');
    document.querySelector('#btn-multi').classList.remove('display-none');
    document.querySelector('#btn-comp').classList.remove('display-none');
    document.querySelector('#btn-settings').classList.remove('display-none');
    document.querySelector('#btn-history').classList.remove('display-none');
    document.querySelector('#topics').classList.remove('display-none');
    document.querySelector('#letter-display').classList.add('display-none');
    document.querySelector('#btn-end').classList.add('display-none');
    document.querySelector('#keyboard').classList.add('display-none')
}

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
        }
    }
    if (foundLetter == false) {
        event.currentTarget.classList.add('btn-wrong');
        event.currentTarget.removeEventListener('click', checkLetters);
        playerScore += 1;
    }
    canvasBuild(playerScore);
    if (correctLetters === uniqueLetters) {GameWon()};
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
        const wordIndex = Math.floor(Math.random() * wordArray.length);
        console.log(wordArray[wordIndex]);
        return wordArray[wordIndex]
    } catch {
        console.log("could not locate array");
    }
}

export function startGame() {
    startToggle()
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

    // Count unique letters
    // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    uniqueLetters = splitWord.filter((v, i, splitWord) => splitWord.indexOf(v) === i).length;
    wordLength = splitWord.length;
}

function removeKeyColours() {
    const reds = document.querySelectorAll('.btn-wrong');
    const greens = document.querySelectorAll('.btn-correct');
    Array.from(reds).forEach(element => {
        element.classList.remove('btn-wrong');});
    Array.from(greens).forEach(element => {
        element.classList.remove('btn-correct');});
}

export function gameWon() {
    endToggle();
    removeKeyColours();
}

export function gameLost() {
    endToggle();
    removeKeyColours();
}

// Word Display 
function clearWordDisplay() {
    const element = document.querySelector("#letter-display")
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
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
