// Output a sequence of numbers 
/*
const first = Number(process.argv[2]);
const last = Number(process.argv[3]);
const increment = Number(process.argv[4])

if (Number.isNaN(first) || Number.isNaN(last)) {
    console.error('Usage: node copy-examples-4.js number number');
    process.exit(1);
}

if (first < last) {
    for (let i = first; i <= last; i++) {
        console.log(i);
        i += increment - 1;
    }    
} else {
    for (let i = first; i >= last; i--) {
        console.log(i);
        i -= increment - 1;
    }
}
*/

// More Sequences
/*
let first, incr, last;

if (process.argv.length === 3) {
    first = 1;
    incr = 1;
    last = Number(process.argv[2]);
} else if (process.argv.length === 4) {
    first = Number(process.argv[2]);
    incr = 1;
    last = Number(process.argv[3]);
} else if (process.argv.length === 5) {
    first = Number(process.argv[2]);
    incr = Number(process.argv[3]);
    last = Number(process.argv[4]);
}

if (last == null || Number.isNaN(first) || Number.isNaN(incr) || Number.isNaN(last)) {
    console.error('Usage: node copy-examples-4.js [first [incr]] last');
    process.exit(i);
}

for (let i = 0; i <= last; i+= incr) {
    console.log(i);
}
*/

// Reverse a text file
/*
const fs = require('fs');

if (process.argv.length !== 4) {
    console.error('Usage: node copy-examples-4.js inputfile outputfile');
    process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

const fileContents = fs.readFileSync(inputFile, 'utf-8');

const characters = Array.from(fileContents);
const reversed = characters.reverse();

fs.writeFileSync(outputFile, reversed.join(''));
*/

// Reverse words

const fs = require('fs');

if (process.argv.length !== 3) {
    console.error('Usage: node copy-examples-4.js file')
    process.exit(1);
}

function reverse(string) {
    return Array.from(string).reverse().join('')
}

const fileName = process.argv[2];

const fileContents = fs.readFileSync(fileName, 'utf-8');


