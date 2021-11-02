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

console.log(letterInWordForLoop("i", "interesting"));
console.log(letterInWordForLoop("i", "apples"));

console.log(letterInWordRegex("i", "interesting"));
console.log(letterInWordRegex("i", "apples"));


// Random Word Generator
// NOTE: planned to use a seperate JSON file but wasnt smart enough
// to learn how to import .JSON locally
const words = [
    'hello',
    'i',
    'am',
    'here',
];

function randomWordGen(wordsArray) {
    const wordIndex = Math.floor(Math.random() * wordsArray.length);
    console.log(wordsArray[wordIndex]);
}

randomWordGen(words);