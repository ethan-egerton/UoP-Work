import * as tools from './tools.mjs';

export let currentLobby;

export async function generateLobby() {
  const response = await fetch('/getActiveLobbies');
  const responseJson = await response.json();
  const lobbies = responseJson.lobbies;
  do {
    currentLobby = tools.charGen(7).toString;
  } while (lobbies.includes(currentLobby));
  await fetch(`/createLobby/${currentLobby}`);
}

export async function joinLobby(id) {
  const response = await fetch(`/joinLobby/${id}`);
  if (response.status === 200) {
    currentLobby = id;
    return true;
  } else {
    return false;
  }
}
