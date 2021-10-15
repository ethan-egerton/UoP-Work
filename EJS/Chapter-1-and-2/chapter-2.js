// Triangle Loop
const string = "#";

for (i = 0; i != 7; i++) {
    console.log(string.repeat(i));
}


// FizzBuzz
let divBy3, divBy5 = false;

for (i = 0; i != 100; i++) {
    if ((i % 3) == 0) {divBy3 = true};
    if ((i % 5) == 0) {divBy5 = true};

    if (divBy3 == true && divBy5 == true) {
        console.log("FizzBuzz ")
    }
    if (divBy3 == true) {
        console.log("Fizz ")
    }
    if (divBy5 == true) {
        console.log("Buzz ")
    }
}

// Chessboard
const prompt = require('prompt-sync')({sigint: true})
let chessString = ""

sizeX = prompt('How long do you want the chessboard: ')
sizeY = prompt('How tall do you want the chessboard: ')

for (let i = 0; i < sizeY; i++) {
    for (let index = 0; index < sizeX; index++) {
        if ((index % 2) == 0) {
            chessString += "#";
        } else {
            chessString += " ";
        }
    }
    if ((i % 2) == 0) {
        chessString += "\n "
    } else {
        chessString += "\n"
    }
}

console.log(chessString)