import * as game from "./modules/game.mjs";
import * as ui from "./modules/ui.mjs";
import * as tools from "./modules/ui.mjs";

document.querySelector('#btn-single').addEventListener('click', ui.selectMode)
document.querySelector('#btn-comp').addEventListener('click', ui.selectMode)
document.querySelector('#btn-multi').addEventListener('click', ui.selectMode)
document.querySelector('#btn-settings').addEventListener('click', ui.selectMode)
document.querySelector('#btn-history').addEventListener('click', ui.selectMode)
document.querySelector('#btn-end').addEventListener('click', game.gameLost);
document.querySelector('#food').addEventListener('click', ui.selectTopic);
document.querySelector('#music').addEventListener('click', ui.selectTopic);