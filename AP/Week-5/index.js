/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

function replaceText(elem, str) {
    elem.textContent = str;
}

function addTextTo(elem, str) {
    elem.textContent += str;
}

function moreBears() {
    animals.src = "http://placebear.com/400/200";
    animals.alt = "A bear.";
    animals.title = "A BEAR!";
}

function setId(elem, str) {
    elem.id = str;
    return elem;
}

function setClass(elem, str) {
    elem.className = str;
    return elem;
}

function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

function newElement(name) {
    return document.createElement(name);
}

function findElementById(id) {
    return document.getElementById(id);
}
function findElementsByQuery(query) {
    return document.querySelectorAll(query);
}

function reverseList(query) {
    let objects = document.querySelector(query);
    let i = objects.childNodes.length;
    while (i--) {objects.appendChild(objects.childNodes[i]);}
    return objects;
}


function mover(moveThis, appendToThis) {
    const objectToMove = document.querySelector(moveThis);
    const objectToAppend = document.querySelector(appendToThis);
    objectToAppend.appendChild(objectToMove);
}



function filler(list, candidates) {
    for (let i = 0; i < candidates.length; i++) {
        let li = document.createElement('LI');
        li.appendChild(document.createTextNode(candidates[i]));
        list.appendChild(li);
    }
}

function dupe(selector) {
    document.querySelector(selector).parentElement.appendChild(document.querySelector(selector).cloneNode(true));
}

function removeAll(selector) {
    for (let i = 0; i <= document.querySelectorAll(selector).length - 1; i++) {
        document.querySelectorAll(selector).forEach(el => el.remove());
    }
}

function getUserData() {
    const name = document.querySelector('#username').value;
    const speed = document.querySelector('#speed').value;
    const student = document.querySelector('#student').checked;

    return {
        name: name,
        speed: parseInt(speed),
        student: student
    };
}