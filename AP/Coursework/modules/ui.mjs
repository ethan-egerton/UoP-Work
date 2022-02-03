import * as game from './game.mjs';
import * as tools from './tools.mjs';

export let wordArray = [];
let selectedMode = '';

function clearWordDisplay() {
    const element = document.querySelector("#letter-display")
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export function displayGame() {
    console.log("loaded")
    document.querySelector('.app').classList.remove('display-none');
}

// Display Toggles
export function startToggle() {
    clearWordDisplay()
    document.querySelector('#topic-display').classList.add('display-none');
    document.querySelector('#btn-single').classList.add('display-none');
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

export function endToggle() {
    document.querySelector('#topic-display').classList.remove('display-none');
    document.querySelector('#btn-single').classList.remove('display-none');
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

function topicOnToggle() {
    document.querySelector('#topic-display').classList.remove('display-none');
    document.querySelector('#topics').classList.remove('display-none');
}

function clearControls() {
    document.querySelector('#topic-display').classList.add('display-none');
    document.querySelector('#topics').classList.add('display-none');
    document.querySelector('#btn-start').classList.add('display-none');
    try {
        document.querySelector('.btn-selected').classList.remove('btn-selected');
    } catch {}
}

// Topic Selecting
export function selectTopic(event) {
    let topic = event.currentTarget.id;
    document.querySelector("#topic-selected").textContent = topic;
    let wordsObj = tools.fetchWordData();
    wordArray = wordsObj[topic];
    document.querySelector('#btn-start').classList.remove('display-none');
    document.querySelector('#btn-start').addEventListener('click', game.startGame);
}

// Dynamic selection
export function selectMode(event) {
    if (selectedMode != '') {
        document.querySelector('.' + selectedMode + '-selected').classList.remove(selectedMode + '-selected')
    }
    selectedMode = event.currentTarget.id
    switch (selectedMode) {
        case 'btn-single':
            clearControls();
            topicOnToggle();
            singleplayerSelected()
            break;
        case 'btn-comp':
            clearControls();
            break;
        case 'btn-multi':
            clearControls();
            break;
        case 'btn-settings':
            clearControls();
            break;
        case 'btn-history':
            clearControls();
            break;
    }

    event.currentTarget.classList += ' ' + selectedMode + '-selected'
}

export function removeKeyColours() {
    const reds = document.querySelectorAll('.btn-wrong');
    const greens = document.querySelectorAll('.btn-correct');
    Array.from(reds).forEach(element => {
        element.classList.remove('btn-wrong');
    });
    Array.from(greens).forEach(element => {
        element.classList.remove('btn-correct');
    });
}

function singleplayerSelected() {
    document.querySelector('#keyboard').classList.add('sidebar-bot');
    document.querySelector('#topics').classList.add('topics');
    document.querySelector('#btn-single').classList.add('btn-selected');
    generateKeyboard();
}

function generateKeyboard() {
    const qwerty = tools.qwertyString();
    const qwertyArray = qwerty.split("");
    const keyboard = document.querySelector('#keyboard');
    for (let i = 0; i < qwertyArray.length; i++) {
        if (qwertyArray[i] == "/") {
            keyboard.appendChild(document.createElement('br'));
        } else {
            const button = document.createElement('button');
            button.appendChild(document.createTextNode(qwertyArray[i]));
            keyboard.appendChild(button);
        }
    }
}

export function winDisplay(ctx) {
    console.log()
}