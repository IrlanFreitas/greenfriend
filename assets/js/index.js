[
    {
        "id": 1,
        "name": "Euphorbia eritrea",
        "sun": "high",
        "water": "rarely",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/euphorbia-eritrea.png",
        "price": 25,
        "toxicity": false,
        "staff_favorite": true
    },
    {
        "id": 2,
        "name": "Succulent Bowl",
        "sun": "high",
        "water": "rarely",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/succulent-bowl.png",
        "price": 30,
        "toxicity": false,
        "staff_favorite": false
    },
    {
        "id": 3,
        "name": "Bunny ears cacti",
        "sun": "high",
        "water": "rarely",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/bunny-ears-cacti.png",
        "price": 20,
        "toxicity": false,
        "staff_favorite": false
    },
    {
        "id": 4,
        "name": "Ficus lyrata",
        "sun": "high",
        "water": "regularly",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ficus-lyrata.png",
        "price": 30,
        "toxicity": false,
        "staff_favorite": false
    },
    {
        "id": 5,
        "name": "Bamboo",
        "sun": "low",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/lucky-bamboo.png",
        "water": "regularly",
        "price": 15,
        "toxicity": false,
        "staff_favorite": false
    },
    {
        "id": 6,
        "name": "Ponytail Palm",
        "sun": "low",
        "water": "regularly",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ponytail-palm.png",
        "price": 50,
        "toxicity": false,
        "staff_favorite": false
    },
    {
        "id": 7,
        "name": "Pilea peperomioides",
        "sun": "no",
        "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/pilea-peperomioides.png",
        "water": "regularly",
        "price": 50,
        "toxicity": true,
        "staff_favorite": false
    }
]

const selectorSun = document.querySelector("#selector_sun");
const selectorWater = document.querySelector("#selector_water");
const selectorPets = document.querySelector("#selector_pets");

const emptyContainer = document.querySelector(".empty");
const resultsContainer = document.querySelector(".results");

let sunSelected = "";
let waterSelected = "";
let petsSelected = "";

const icons = {
    oneDrop: "./assets/icons/1-drop.svg",
    twoDrops: "./assets/icons/two-drops.svg",
    threeDrops: "./assets/icons/3-drops.svg",
    toxic: "./assets/icons/toxic.svg",
    pet: "./assets/icons/pet.svg",
    noSun: "./assets/icons/no-sun.svg",
    lowSun: "./assets/icons/low-sun.svg",
}

selectorSun.addEventListener("change", (event) => {
    sunSelected = event.target.value;
    picks();
})

selectorWater.addEventListener("change", (event) => {
    waterSelected = event.target.value;
    picks();
})

selectorPets.addEventListener("change", (event) => {
    petsSelected = event.target.value;
    picks();
})

const picks = () => {
    if (!sunSelected && !waterSelected && !petsSelected) {
        query(sunSelected, waterSelected, petsSelected);
    }
}

const query = (sun, water, pets) => {
    return `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun}&water=${water}&pets=${pets}`;
}
