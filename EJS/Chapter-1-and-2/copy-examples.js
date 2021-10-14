/// code for portsoc.github.io/code-copy-examples
// even or odd CLI script

/*
const prompt = require('prompt-sync')({sigint: true});

const number = Number(prompt('enter a number: '));

if (number % 2 === 0) {
    console.log(number, 'is even');
} else {
    console.log(number, 'is odd');
}
*/

// Problematic as will always return odd when given fraction due to else statement

// integer or fraction CLI script
/*
const prompt = require('prompt-sync')({sigint: true});

const number = Number(prompt('enter a number: '));

if (Number.isInteger(number)) {
    console.log(number, 'is integer');
} else {
    console.log(number, 'is fractional');
}
*/

// Problematic as will return strings as fractional due to else statement

// number indentifier CLI script
/*
const prompt = require('prompt-sync')({sigint: true});

const number = prompt('enter a number: ');

if (!Number.isNaN(Number(number))) {
    console.log(number, 'is number')
} else {
    console.log(number, 'is not a number')
}
*/

// string concatenation CLI
/*
const prompt = require('prompt-sync')({sigint: true});

const firstInput = prompt('enter something: ');
const secondInput = prompt('enter something: ');

console.log(firstInput + secondInput);
*/

// number addition CLI script
/*
const prompt = require('prompt-sync')({sigint: true});

const firstNumber = Number(prompt('enter a number: '));
const secondNumber = Number(prompt('enter a number: '));

console.log(firstNumber + secondNumber);
*/

// string length CLI script
/*
const prompt = require('prompt-sync')({sigint: true});

const input = prompt('enter something: ');

console.log(input.length);
*/

// rock, paper, scissors
/*
const prompt = require('prompt-sync')({sigint: true});

const randomNumber = Math.random();

let computerChoice;

if (randomNumber < 1/3) {
    computerChoice = 'rock';
} else if (randomNumber < 2/3) {
    computerChoice = 'paper';
} else {
    computerChoice = 'scissors';
}

const userChoice = prompt('enter your choice (rock, paper, scissors): ');

if (userChoice === computerChoice) {
    console.log("It's a draw, we both have", userChoice);
} else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
        console.log("I win with paper over rock");
    } else {
        console.log("You win with rock over scissors");
    }
} else if (userChoice === 'paper') {
    if (computerChoice = 'rock') {
        console.log("You win with paper over rock");
    } else {
        console.log("I win with scissors over paper");
    }
} else {
    if (computerChoice === 'paper') {
        console.log("You win with scissors over paper");
    } else { 
        console.log("I win with rock over scissors");
    }
}
*/

// guess a number CLI script
/*
const prompt = require('prompt-sync')({sigint: true});

const randomNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = Number(prompt("enter a number: "));

if (randomNumber === userGuess) {
    console.log("Correct!");
} else {
    console.log("Sorry , I was thinking ", randomNumber);
}
*/

// Guess a number but very mean CLI script
/*
const prompt = require('prompt-sync')({sigint: true});

const winningNumber = Math.floor(Math.random() * 10) + 1;

console.log("In my infinite wisdom,\nI have thought of an integer between 1 and 10.")

const guess = Number(prompt("Tell me what you think it is: "));

if (!Number.isInteger(guess)) {
    console.log("Seriously... you don't know what an integer is? Come back when you have read a book on maths");
} else if (guess > 10 || guess < 1) {
    console.log("Duh, I told you it would be between 1 and 10. Curse your feeble organic brain!");
} else if (guess === winningNumber) {
    console.log("What? You got it? You must have cheated... Shame on you.");
} else {
    console.log("As I expected, I outwitted you. I was thinking of ", winningNumber);
    console.log("I retire undefeated.");
}
*/

// Rock, paper scissors with arrays and objects CLI script
/*
const prompt = require('prompt-sync')({sigint: true});

const CHOICES = ['rock', 'paper', 'scissors'];

const LOSING_CHOICE = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper', 
};

const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = CHOICES[randomNumber];

const userChoice = prompt('Enter your choice (rock, paper, scissors): ');

if (userChoice === computerChoice) {
    console.log("It's a draw, we both have ", userChoice);
} else if (LOSING_CHOICE[userChoice] === computerChoice) {
    console.log(`You win with ${userChoice} over ${computerChoice}`);
} else {
    console.log(`I win with ${computerChoice} over ${userChoice}`);
}
*/

// rock paper scissors looped CLI script

const prompt = require('prompt-sync')({sigint: true});

const CHOICES = ['rock', 'paper', 'scissors'];

const LOSING_CHOICE = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};

let userChoice;

do {
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = CHOICES[randomNumber];

    userChoice = prompt('Enter your choice (rock, paper, scissors) or the word "stop": ')
    
    if (userChoice !== 'stop') {
        if (!CHOICES.includes(userChoice)) {
            console.error('Sorry, the only options are rock, paper and scissors.\nTry again.')
        }

        if (userChoice === computerChoice) {
            console.log("It's a draw, we both have ", userChoice);
        } else if (LOSING_CHOICE[userChoice] === computerChoice) {
            console.log(`You win with ${userChoice} over ${computerChoice}`)
        } else {
            console.log(`I win with ${computerChoice} over ${userChoice}`)
        }
    }
} while (userChoice !== 'stop');

console.log('Thank you for the good game!')
