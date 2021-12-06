import './words.json'


let JSONdata = "";
let topic = ""

function startToggle() {
    document.getElementById('topic-display').classList.add('display-none');
    document.getElementById('btn-start').classList.add('display-none');
    document.getElementById('letter-display').classList.remove('display-none');
    document.getElementById('btn-end').classList.remove('display-none');
    document.getElementById('topics').classList.add('display-none')
}

function endToggle() {
    document.getElementById('topic-display').classList.remove('display-none');
    document.getElementById('btn-start').classList.remove('display-none');
    document.getElementById('letter-display').classList.add('display-none');
    document.getElementById('btn-end').classList.add('display-none');
    document.getElementById('topics').classList.remove('display-none')
}


function selectTopic(event) {
    topic = event.currentTarget.id;
    document.getElementById("topic-selected").textContent = topic;
}

function randomWordGen(wordArray) {
    try {
        const wordIndex = Math.floor(Math.random() * wordArray.length);
        return wordArray[wordIndex];
    } catch {
        console.log("could not locate array");
    }
}

function startGame() {
    startToggle()
    const word = randomWordGen(JSONdata[topic]);
    for (const letter in word) {
        let eleLetter = document.createElement(span).textContent(letter)
        eleLetter.className = "letter" 
        document.getElementById('letter-display').append(document.createElement(eleLetter))
    }
    // retrieve topic list, pick random
    // put word on text-display

    // display controls

}

function endGame() {
    endToggle()
}

document.getElementById('btn-start').addEventListener('click', startGame)
document.getElementById('btn-end').addEventListener('click', endGame)
document.getElementById('food').addEventListener('click', selectTopic);
document.getElementById('music').addEventListener('click', selectTopic);


function initialise() {
    
}