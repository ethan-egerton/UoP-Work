'use strict';
/**
 * Add your functions here...
 */

function targetTextToConsole(event) {
    console.log(document.getElementById('button0').textContent)
}

function tttcAttacher() {
    document.getElementById('button0').addEventListener('click',targetTextToConsole)
}

function lovelyParaAttacher() {
    document.getElementById('thisisalovelyparagraph').addEventListener('click',lovelyToggle)
}

function lovelyToggle() { // eslint-disable-line no-unused-vars
    window.thisisalovelyparagraph.classList.toggle('lovely');
  }

function lovelyButtonAttacher() {
    document.getElementById('button1').addEventListener('click', lovelyToggle)
}

function concatAttacher() {
    document.getElementById('in1').addEventListener('change', concater);
    document.getElementById('in2').addEventListener('change', concater);
}

function concater() {
    document.getElementById('out1').textContent = document.getElementById('in1').value + document.getElementById('in2').value;
}

function snitchAttacher() {
    document.getElementById('mousewatcher').addEventListener('mouseover', snitchUpdater)
    document.getElementById('mousewatcher').addEventListener('mouseout', snitchUpdater)
}

function snitchUpdater(event) { // eslint-disable-line no-unused-vars
    window.snitch.textContent = (event.type === 'mouseover' ? 'IN' : 'OUT');
}

function reportAttacher() {
    document.getElementById('mousereporter').addEventListener('mousemove', reportUpdater)
}

function reportUpdater(event) {
    window.report.textContent = event.t
}