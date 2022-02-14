import * as game from './game.mjs';
import * as tools from './tools.mjs';

export let wordArray = [];
let selectedMode = "";

function clearWordDisplay() {
    const element = document.querySelector("#letter-display")
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// called when page loads
export function displayGame() {
    document.querySelector('.lds-roller').classList.add('display-none')
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
    const topic = event.currentTarget.id;
    document.querySelector("#topic-selected").textContent = topic;
    const wordsObj = tools.fetchWordData();
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

function singleplayerSelected() {
    document.querySelector('#keyboard').classList.add('sidebar-bot');
    document.querySelector('#topics').classList.add('topics');
    document.querySelector('#btn-single').classList.add('btn-selected');
}

export function generateKeyboard() {
    const qwerty = tools.qwertyString();
    const qwertyArray = qwerty.split("");
    const keyboard = document.querySelector('#keyboard');
    // button generation, when it hits a / it creates line break
    for (let i = 0; i < qwertyArray.length; i++) {
        if (qwertyArray[i] == "/") {
            const button = document.createElement('div');
            button.classList = ('button-break');
            keyboard.appendChild(button);
        } else {
            const button = document.createElement('button');
            button.appendChild(document.createTextNode(qwertyArray[i]));
            button.id = "keyboard-" + qwertyArray[i];
            button.classList = ("btn btn-keyboard");
            keyboard.appendChild(button);
        }
    }
    // keydown assignment
    document.addEventListener('keydown', keyboardPress);
}

function keyboardPress(e) {
    let keyString = e.code;
    if (keyString.startsWith("Key")) {
        keyString = keyString.slice(3).toLowerCase();
        game.checkLetters(null, keyString);
    }
}

export function removeKeyboard() {
    const keyboard = document.querySelector('#keyboard');
    while (keyboard.firstChild) {
        keyboard.removeChild(keyboard.firstChild);
    }
}

export function endDisplay(winStatus) {
    document.removeEventListener('keydown', keyboardPress);
    document.querySelector('#btn-end').classList.add('display-none');
    let displayText;

    if (winStatus === true) {
        displayText = "YOU WIN!";
    } else {
        displayText = "YOU LOSE!";
    }

    const sidebar = document.querySelector('.sidebar-top');
    const p = document.createElement('P');
    p.appendChild(document.createTextNode(displayText));
    p.id = "end-text";
    p.classList = ("h1");

    const button = document.createElement('button');
    button.appendChild(document.createTextNode("Return to menu"))
    button.id = "return-button";
    p.classList = ("btn-quit")

    sidebar.appendChild(p);
    sidebar.appendChild(button);
}
