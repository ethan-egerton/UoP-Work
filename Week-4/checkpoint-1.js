// Find letter in word
// A logical way of doing this but not a great way
function letterInWordForLoop(letter, word) {
    const wordLetters = []
    for (let i = 0; i < word.length; i++) {wordLetters.push(word[i])}
    if (wordLetters.includes(letter)) {
        return true;
    } else {
        return false;
    }
}

// Regex is pretty sick
function letterInWordRegex(letter, word) {
    const regex = new RegExp(letter);
    return regex.test(word);
}

console.table([["For Loop", letterInWordForLoop("i", "interesting"), letterInWordForLoop("i", "apples") ], ["Regex", letterInWordRegex("i", "interesting"), letterInWordRegex("i", "apples")]] )


// Random Word Generator
function randomWordGen(wordArray) {
    const wordIndex = Math.floor(Math.random() * wordArray.length);
    console.log(wordArray[wordIndex]);
}

const json = require("./words.json");
console.log("\n\nRandom word: ");
randomWordGen(json["words"])


