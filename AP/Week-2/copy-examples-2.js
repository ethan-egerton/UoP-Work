// Multiply by adding
/*
const prompt = require('prompt-sync')({sigint: true});

const a = Number(prompt('Enter a postive integer: '));
const b = Number(prompt('Enter any number: '));

console.log(`${a}*${b} = ${a*b}`);

let result = 0;

for (let i = 0; i < a; i++) {
    result += b;
}

console.log(`${a}*${b} = ${result}`)
*/

// Extension: Exponent by adding
/*
const prompt = require('prompt-sync')({sigint: true});

const a = Number(prompt('Enter a postive integer: '));
const b = Number(prompt('Enter any exponent: '));

console.log(`${a}^${b} = ${a**b}`);

let result = 0;

for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
        result += a;  
    }
}

console.log(`${a}^${b} = ${result}`);
*/

// Count words in a sentence
/*
const prompt = require('prompt-sync')({sigint: true});

const words = prompt("Enter a sentence: ");

let spaceCount = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] === ' ') spaceCount += 1;
}

console.log("Word count: ", spaceCount + 1);
*/

// Better word counter
/*
const prompt = require('prompt-sync')({signint: true});

const sentence = prompt("Enter a sentence: ")

let wordCount = 0;

let foundFirstWord = false;
let previousWasSpace = false;

for (let i = 0; i < sentence.length; i++) {
    if (!foundFirstWord) {
        if (sentence[i] !== ' ') {
            foundFirstWord = true
            wordCount = 1;            
        }
    } else {
        if (sentence[i] !== ' ' && previousWasSpace) {
            wordCount += 1;
            previousWasSpace = false;
        }
        if (sentence[i] === ' ') {
            previousWasSpace = true;       
        }
    }
}

console.log("Word count: ", wordCount)
*/

// Count sentences
/* 
const prompt = require('prompt-sync')({sigint: true})

const text = prompt("Enter several sentences: ")

let sentenceCount = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] === '.') {
        if (i === text.length - 1) {
            sentenceCount += 1;
        } else if (text[i+1] === ' ') {
            sentenceCount += 1;
        }
    } 
}

console.log("Sentence count: ", sentenceCount)
*/

// File Extension Remover
/*
const prompt = require('prompt-sync')({sigint: true});

const fileName = prompt('enter a file name: ');

let foundLastDot = false;
let response = '';

for (let i = fileName.length; i >= 0; i--) {
    if (!foundLastDot) {
        if (fileName[i] === '.') {
            foundLastDot = true;
        }
    } else {
        response = fileName[i] + response;
    }
}

if (response === '') {
    console.log('file name does not have an extension: ', fileName);    
} else {
    console.log('file name without extension: ', response)
}
*/

// Generate random words
/*
const prompt = require('prompt-sync')({sigint: true});

const count = Number(prompt('How many words? '));

const words = [
    'aliqua', 'labouris', 'quid', 'possums', 'adipisicing'
];

let response = "";

for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * words.length);
    response = response + words[randomNumber] + " ";
}

console.log(response);
*/

// Sentence Generator
/*
const prompt = require('prompt-sync')({sigint: true});

const count = Number(prompt('How many words? '));

const words = [
    'aliqua', 'labouris', 'quid', 'possums', 'adipisicing'
];

const startingWords = [
    'Summis', 'Eiusmod', 'Ab', 'Aute',
];

const sentenceEndings = [".", "?", "!"];

let response = "";
let startingNewSentence = true;

for (let i = 0; i < count; i++) {
    if (startingNewSentence) {
        const randomNumber = Math.floor(Math.random() * startingWords.length);
        response = response + startingWords[randomNumber];
        startingNewSentence = false;
    } else {
        const randomNumber = Math.floor(Math.random() * words.length);
        response = response + words[randomNumber];
    }

    if (Math.random() < 0.2 || i === count - 1) {
        const randomNumber = Math.floor(Math.random() * sentenceEndings.length);
        response = response + sentenceEndings[randomNumber];
        startingNewSentence = true;
    }
    response = response + " ";
}

console.log(response);
*/

// Nick-Book
/*
const prompt = require('prompt-sync')({sigint: true});

const knownPeople = [
    {
        name: "Matt Dennis",
        nick: "Dr Matt",
    },
    {
        name: "Rich Boakes",
        nick: "Dr Rich",
    },
    {
        name: "Jacek Kopecky",
        nick: "Dr Jack"
    },
];

let command;

do {
    console.log();
    command = prompt("Enter command (or enter 'help'): ");
    if (command === "help") {
        console.log("available commands:");
        console.log("   help    print this help");
        console.log("   stop    exit the program");
        console.log("   count   show how many persons we know");
        console.log("   add     add a person");
        console.log("   nick    search by nick");
        console.log("   name    search by name");
    }

    if (command === 'count') {
        console.log(`Record count: ${knownPeople.length}`)
    }

    if (command === 'add') {
        const name = prompt("Name: ")
        const nick = prompt("Nick: ")

        const newPerson = {};
        newPerson.name = name;
        newPerson.nick = nick;

        knownPeople[knownPeople.length] = newPerson;
        console.log(`Added ${name}, new record count: ${knownPeople.length}`);
    }

    if (command === 'nick') {
        const nick = prompt("Nick to search for: ");
        for (const person of knownPeople) {
            if (person.nick.includes(nick)) {
                console.log(`"${person.name}" has nick "${person.nick}"`);
            }
        }
    }

    if (command === 'name') {
        const name = prompt("Name to search for: ");
        for (const person of knownPeople) {
            if (person.name.includes(name)) {
                console.log(`"${person.name}" has nick "${person.nick}"`)
            }
        }
    }
} while (command !== "stop");
*/

// Easier file name extension remover
/*
const prompt = require('prompt-sync')({sigint: true});

const fileName = prompt('enter a file name: ');

const lastDotPosition = fileName.lastIndexOf('.');

if (lastDotPosition < 1) {
    console.log('file name does not have an extenstion: ', fileName);
} else {
    const withoutExtension = fileName.substring(0, lastDotPosition);
    console.log('file without extension: ', withoutExtension);
}
*/
