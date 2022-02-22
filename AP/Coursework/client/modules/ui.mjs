import * as game from './game.mjs';
import * as tools from './tools.mjs';

export let wordArray = [];
let selectedMode = "";

// called when page loads
export function displayGame() {
    document.querySelector('.lds-roller').classList.add('display-none')
    document.querySelector('.app').classList.remove('display-none');
    document.querySelector('#btn-single').addEventListener('click', selectMode)
    document.querySelector('#btn-comp').addEventListener('click', selectMode)
    document.querySelector('#btn-multi').addEventListener('click', selectMode)
    document.querySelector('#btn-settings').addEventListener('click', selectMode)
    document.querySelector('#btn-history').addEventListener('click', selectMode)
    document.querySelector('#btn-end').addEventListener('click', hideGameUI);
    document.querySelector('#food').addEventListener('click', selectTopic);
    document.querySelector('#music').addEventListener('click', selectTopic);
}

// Display Toggles
export function toggleDisplay(hide, elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (hide == true) {
            document.querySelector(element).classList.add('display-none');
        } else {
            document.querySelector(element).classList.remove('display-none');
        }
    }

}

export function startToggle() {
    clearWordDisplay()
    toggleDisplay(true, ['#topic-display', '#btn-single', '#btn-multi', '#btn-comp', '#btn-settings', '#btn-history', '#topics'])
    toggleDisplay(false, ['#letter-display', '#btn-end', '#keyboard'])
}

function clearControls() {
    toggleDisplay(true, ['#topic-display', '#topics'])
    try {
        document.querySelector('.btn-selected').classList.remove('btn-selected');
        removeKeyboard();
    } catch {}
}

export function hideGameUI(endState = false) {
    removeKeyboard();
    toggleDisplay(false, ['#topic-display', '#btn-single', '#btn-multi', '#btn-comp', '#btn-settings', '#btn-history', '#topics'])
    toggleDisplay(true, ['#letter-display', '#btn-end', '#keyboard'])
    if (endState == true) {
        document.querySelector('#end-text').remove();
        document.querySelector('#return-button').remove();
    }
}

function clearWordDisplay() {
    const element = document.querySelector("#letter-display")
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export function keyboardEventCheck() {
    const keyboardButtons = document.querySelectorAll('.btn-keyboard')
    Array.from(keyboardButtons).forEach(element => {
        element.addEventListener('click', game.checkLetters);
    });
}

function keyboardEventInput() {
    const keyboardButtons = document.querySelectorAll('.btn-keyboard')
    Array.from(keyboardButtons).forEach(element => {
        element.addEventListener('click', game.inputLetters);
    });
    document.addEventListener('keydown', game.inputLetters);
}

// Topic Selecting
export function selectTopic(event) {
    const topic = event.currentTarget.id;
    document.querySelector("#topic-selected").textContent = topic;
    const wordsObj = tools.fetchWordData();
    wordArray = wordsObj[topic];
    game.startGame();
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
            toggleDisplay(false, ['#topic-display', '#topics'])
            singleplayerSelected();
            break;
        case 'btn-comp':
            clearControls();
            vsComputerSelected();
            generateKeyboard(true);
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

    event.currentTarget.classList += ' ' + selectedMode + '-selected';
}

function singleplayerSelected() {
    document.querySelector('#keyboard').classList.add('sidebar-bot');
    document.querySelector('#topics').classList.add('topics');
    document.querySelector('#btn-single').classList.add('btn-selected');
}

function vsComputerSelected() {
    document.querySelector('#btn-comp').classList.add('btn-selected');
    document.querySelector('#keyboard').classList.add('sidebar-bot');
    toggleDisplay(false, ['#keyboard'])
}

export function generateKeyboard(backspace = false) {
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
    if (backspace == true) {
        const button = document.createElement('button');
        button.appendChild(document.createTextNode("←"));
        button.id = "keyboard-backspace";
        button.classList = ("btn btn-keyboard");
        keyboard.appendChild(button);
    }
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
    let displayText = undefined;

    if (winStatus === true) {
        displayText = "YOU WIN!";
    } else {
        displayText = "YOU LOSE!";
    }

    const sidebar = document.querySelector('.controls');
    const p = document.createElement('P');
    p.appendChild(document.createTextNode(displayText));
    p.id = "end-text";
    p.classList = ("end-text");

    const button = document.createElement('button');
    button.appendChild(document.createTextNode("Return to menu"))
    button.id = "return-button";
    button.classList = ("btn btn-quit")
    button.addEventListener('click', hideGameUI(true));

    sidebar.prepend(button);
    sidebar.prepend(p);
}