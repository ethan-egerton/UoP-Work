function topicToggle() {
    const visibility = document.getElementById('topics-section').style.visibility;
    if (visibility == "hidden") {
        document.getElementById('topics-section').style.visibility = "visible";
    } else {
        document.getElementById('topics-section').style.visibility = "hidden";
    }
}

function selectTopic(id) {
    
}

document.getElementById('topic-btn').addEventListener('click', topicToggle);

