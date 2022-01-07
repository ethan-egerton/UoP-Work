import * as game from "./modules/game.mjs";
import * as ui from "./modules/ui.mjs";

// Declaration
let wordsObj = {};

// Data fetching
fetch("./words.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){ 
        wordsObj = data
    })

document.querySelector('#btn-end').addEventListener('click', game.gameLost);
document.querySelector('#food').addEventListener('click', ui.selectTopic);
document.querySelector('#music').addEventListener('click', ui.selectTopic);
