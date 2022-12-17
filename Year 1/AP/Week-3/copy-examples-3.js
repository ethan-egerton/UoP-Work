// Prime Check
/*
const prompt = require('prompt-sync')({ sigint: true })

function isPrime(n) {
    if (!Number.isInteger(n) || n < 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function printPrimes(count) {
    let currentNumber = 2;
    while (count > 0) {
        if (isPrime(currentNumber)) {
            console.log(`prime: ${currentNumber}`);
            count -= 1;
        }
    currentNumber += 1;
    }
}

const count = Number(prompt('How many prime numbers would you like? '))
printPrimes(count);
*/

// Reverse an array
/*
function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const firstHalfItem = arr[i];
        const secondHalfItem = arr[arr.length - 1 - i];
        arr[i] = secondHalfItem;
        arr[arr.length - 1 - i] = firstHalfItem;
    }
    return arr;
}

console.log('test 123: ', reverseArray([1, 2, 3]));
console.log('test 1234: ', reverseArray([1, 2, 3 ,4]));
*/

// Palindrome check
/*
const prompt = require('prompt-sync')({ sigint: true });

function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const firstHalfItem = arr[i];
        const secondHalfItem = arr[arr.length - 1 - i];
        arr[i] = secondHalfItem;
        arr[arr.length - 1 - i] = firstHalfItem;
    }
    return arr;
}

function reverseString(str) {
    const array = Array.from(str);

    reverseArray(array);

    return array.join('');
}

function isPalindrome(word) {
    return word === reverseString(word);
}

const word = prompt('enter a word: ')

if (isPalindrome(word)) {
    console.log(`"${word}" is a palindrome"`);
} else {
    console.log(`"${word}" is not a palindrome, as its reverse spells "${reverseString(word)}"`)
}
*/

// Dice roll
/*
const prompt = require('prompt-sync')({ sigint: true });

function diceRoll() {
    const SIDES = 6;
    const side = Math.floor(Math.random() * SIDES) + 1;
    return side;
}

const count = Number(prompt('how many dice rolls would you like? '));

for (let i = 0; i < count; i++) {
    console.log(diceRoll());
}

*/

// Dice roll history
/*
const prompt = require('prompt-sync')({ sigint: true });

function diceRoll() {
    const SIDES = 6;
    const side = Math.floor(Math.random() * SIDES) + 1;
    return side;
}

function gatherDiceRollHistory(n) {
    const history = [0, 0, 0, 0, 0, 0]

    for (let i = 0; i < n; i++) {
        const roll = diceRoll();
        history[roll - 1] += 1;
    }

    return history;
}

function toPercent(n) {
    const percent = (n * 100).toFixed(1);
    return `${percent}%`
}

const attempts = Number(prompt('how many times should we roll? '));

const history = gatherDiceRollHistory(attempts);

for (let i = 1; i <= 6; i++) {
    const chance = history[i - 1] / attempts;
    console.log(`Number ${i} chance: ${toPercent(chance)}`);
}

*/

// Dice roll graph
/*
const prompt = require('prompt-sync')({ sigint: true });

function diceRoll() {
    const SIDES = 6;
    const side = Math.floor(Math.random() * SIDES) + 1;
    return side;
}

function gatherDiceRollHistory(n) {
    const history = [0, 0, 0, 0, 0, 0]

    for (let i = 0; i < n; i++) {
        const roll = diceRoll();
        history[roll - 1] += 1;
    }

    return history;
}

function max(arr) {
    let max = arr[0];
    for (const item of arr) {
        if (item > max) max = item;
    }

    return max;
}

const attempts = Number(prompt('how many times should we roll? '));

const history = gatherDiceRollHistory(attempts);

const LINE_LENGTH = 20;

const maxCount = max(history);
for (let i = 1; i <= 6; i++) {
    const lineLength = Math.round(history[i - 1] / maxCount * LINE_LENGTH);
    
    const line = '#'.repeat(lineLength);
    console.log(`${i}: ${line}`);
}
*/

// Word Tower

/*
const prompt = require('prompt-sync')({ sigint: true });

function describeWordTower(word) {
    const retval = [];

    for (let i = 0; i < word.length; i++) {
        const character = word[i];
        const layerSize = (i + 1) *2;
        const layerDescription = {
            w: layerSize,
            ch: character,
        };

        retval.push(layerDescription);
    }

    return retval;
}

function createLayerString(towerWidth, layerDescription) {
    const spaceCount = towerWidth - layerDescription.w;
    const sidePadding = ' '.repeat(spaceCount / 2);
    const characters = layerDescription.ch.repeat(layerDescription.w);
    return sidePadding + characters + sidePadding
}

const WIDTH = 500;

const word = prompt('enter a word: ');
const towerDescription = describeWordTower(word);
for (const layer of towerDescription) {
    console.log(createLayerString(WIDTH, layer));
}
*/

// Word Tower with Colour
/*
const prompt = require('prompt-sync')({ sigint: true });
const colors = require('colors/safe');

function nthColor(n, string) {
    const colorFunctions = [
        colors.red,
        colors.green,
        colors.yellow,
        colors.blue,
        colors.magenta,
        colors.cyan,
    ];

    const selectedColorFunction = colorFunctions[n % colorFunctions.length];

    return selectedColorFunction(string);
}

function describeWordTower(word) {
    const retval = [];

    for (let i = 0; i < word.length; i++) {
        const character = word[i];
        const layerSize = (i + 1) *2;
        const layerDescription = {
            w: layerSize,
            ch: character,
        };

        retval.push(layerDescription);
    }

    return retval;
}

function createLayerString(towerWidth, layerDescription) {
    const spaceCount = towerWidth - layerDescription.w;
    const sidePadding = ' '.repeat(spaceCount / 2);
    const characters = layerDescription.ch.repeat(layerDescription.w);
    return sidePadding + characters + sidePadding
}

const WIDTH = 500;

const word = prompt('enter a word: ');
const towerDescription = describeWordTower(word);
for (let i = 0; i < towerDescription.length; i += 1) {
    const layer = towerDescription[i];
    const layerString = createLayerString(WIDTH, layer );
    console.log(nthColor(i, layerString));
}
*/

// Tower of Hanoi

const prompt = require('prompt-sync')({ sigint: true });
const colors = require('colors/safe');

const HEIGHT = 3;
const WIDTH = HEIGHT * 2 + 2;
const EMPTY_LAYER = padLayerString(WIDTH, '');

function nthColor(n, string) {
    const colorFunctions = [
        colors.red,
        colors.green,
        colors.yellow,
        colors.blue,
        colors.magenta,
        colors.cyan,
    ];

    const selectedColorFunction = colorFunctions[n % colorFunctions.length];

    return selectedColorFunction(string);
}


function describeHanoiTower() {
    const tower = [];

    for (let i = 0; i < HEIGHT; i++) {
        const layerSize = (i + 1) * 2;
        const layer = padLayerString(WIDTH, '#'.repeat(layerSize));

        tower.push(nthColor(i, layer));
    }

    return tower;
}

function padLayerString(towerWidth, layer) {
    const spaceCount = towerWidth - layer.length;
    const sidePadding = ' '.repeat(spaceCount / 2);
    return sidePadding + layer + sidePadding;
}

function printTowerSideBySide(spaces) {
    for (let i = 0; i < HEIGHT; i++) {
        let layerString = '';

        for (const tower of spaces) {
            const layerIndex = (tower.layers.length - HEIGHT) + i;

            layerString += layerIndex < 0 ? EMPTY_LAYER : tower.layers[layerIndex];
        }
        
        console.log(layerString);
    }

    let nameLine = '';
    for (const tower of spaces) {
        nameLine += padLayerString(WIDTH, tower.name);
    }

    console.log(nameLine)
}

function playTowerOfHanoi() {
    const spaces = [
        {
            name: 'space #1',
            layers: describeHanoiTower(),
        },
        {
            name: 'space #2',
            layers: [],
        },
        {
            name: 'space #3',
            layers: [],
        },
    ];

    printTowerSideBySide(spaces);

    moveBlocks(spaces[0], spaces[2], spaces[1], HEIGHT);
    console.log('done');

    function moveOneBlock(from, to) {
       console.log(`\nwill move block from ${from.name} ${to.name}`);
       
       prompt('press enter...')

       const block = from.layers.shift();
       to.layers.unshift(block);

       printTowerSideBySide(spaces)
    }

    function moveBlocks(from, to, through, howMany) {
        if (howMany > 0) {
            moveBlocks(from, through, to, howMany - 1);
            moveOneBlock(from, to);
            moveBlocks(through, to, from, howMany - 1);
        }
    }
}

playTowerOfHanoi();