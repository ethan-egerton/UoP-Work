const first = Number(process.argv[2]);
const last = Number(process.argv[3]);

if (Number.isNaN(first) || Number.isNaN(last)) {
    console.error('Usage: node seq.js number number');
    process.exit(1);
}

for (let i = first; i <= last; i++) {
    console.log(i);
}

