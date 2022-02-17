export function fetchWordData() {
    return {
        "food": [
            "bread",
            "cucumber",
            "sandwich",
            "soup",
            "noodles",
            "bagel",
            "steak",
            "chili",
            "cake",
            "pho",
            "fish",
            "chips",
            "lamb",
            "enchilada",
            "taco",
            "ice cream",
            "rice",
            "potato",
            "cheese",
            "kale",
            "banana",
            "strawberry",
            "mango",
            "tomato",
            "plum",
            "pasta",
            "sausage",
            "onion",
            "chocolate"
        ],

        "music": [
            "rock",
            "hip hop",
            "pop",
            "jazz",
            "country",
            "funk",
            "punk",
            "blues",
            "edm",
            "reggae",
            "house",
            "techno",
            "metal",
            "trance",
            "ambient",
            "swing",
            "dance",
            "dubstep",
            "hardcore",
            "experimental",
            "grunge",
            "ska"

        ]
    };
}

export function qwertyString() {
    return "qwertyuiop/asdfghjkl/zxcvbnm"
}

// https://www.sitepoint.com/delay-sleep-pause-wait/
export function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}