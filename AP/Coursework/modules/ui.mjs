
// Declaration
let topic = ""

// Topic Selecting
export function selectTopic(event) {
    let topic = event.currentTarget.id;
    document.querySelector("#topic-selected").textContent = topic;
    wordArray = wordsObj[topic]
    document.querySelector('#btn-start').addEventListener('click', game.startGame)
}
