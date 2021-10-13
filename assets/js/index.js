
const selectorSun = document.querySelector("#selector_sun");
const selectorWater = document.querySelector("#selector_water");
const selectorPets = document.querySelector("#selector_pets");

const emptyContainer = document.querySelector(".empty");
const resultsContainer = document.querySelector(".results");
const resultsCardsContainer = document.querySelector(".results__cards");

let sunSelected = "";
let waterSelected = "";
let petsSelected = "";

const toxicImage = {
    toxic: "./assets/img/icons/toxic.svg",
    pet: "./assets/img/icons/pet.svg",
}

const dropImage = {
    rarely: "./assets/img/icons/1-drop.svg",
    regularly: "./assets/img/icons/two-drops.svg",
    daily: "./assets/img/icons/3-drops.svg",
}

const sunImage = {
    no: "./assets/img/icons/no-sun.svg",
    low: "./assets/img/icons/low-sun.svg",
    high: "./assets/img/icons/high-sun.svg",
}

const picks = () => {
    if (sunSelected !== "" && waterSelected !== "" && petsSelected !== "") {
        fetch(query(sunSelected, waterSelected, petsSelected), {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }).then((resp) => resp.json())
            .then(data => {
                resultsCardsContainer.innerHTML = "";
                if (data.length !== 0) {
                    emptyContainer.style.display = "none"
                    resultsContainer.style.display = "inline-block"

                    data.forEach(item => {
                        createCard(item)
                    });
                } else {
                    emptyContainer.style.display = "inline-block"
                    resultsContainer.style.display = "none"
                }

            })
    }
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


const query = (sun, water, pets) => {
    return `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun}&water=${water}&pets=${pets}`;
}

const createCard = (plant) => {
    const card = document.createElement("div");
    card.classList.add("results__card");
    if (plant.staff_favorite)
        card.classList.add("card-rarely");

    const img = document.createElement("img");
    img.classList.add("card__img");
    img.src = plant.url;
    img.alt = "Imagem de uma planta";

    const content = document.createElement("div");
    content.classList.add("card__content");

    const title = document.createElement("p")
    title.classList.add("card__title")
    title.textContent = plant.name

    const status = document.createElement("div")
    status.classList.add("card__status")

    const value = document.createElement("p")
    value.classList.add("card__value")
    value.textContent = `$${plant.price}`

    const icons = document.createElement("div")
    icons.classList.add("card__icons")

    const toxicIcon = document.createElement("img")
    toxicIcon.classList.add("card__icon")
    toxicIcon.src = plant.toxic ? toxicImage.toxic : toxicImage.pet;

    const sunIcon = document.createElement("img")
    sunIcon.classList.add("card__icon")
    sunIcon.src = sunImage[plant.sun];

    const dropsIcon = document.createElement("img")
    dropsIcon.classList.add("card__icon")
    dropsIcon.src = dropImage[plant.water];

    icons.appendChild(toxicIcon);
    icons.appendChild(sunIcon);
    icons.appendChild(dropsIcon);

    status.appendChild(value)
    status.appendChild(icons)

    content.appendChild(title);
    content.appendChild(status);

    card.appendChild(img)
    card.appendChild(content)

    resultsCardsContainer.appendChild(card);

}

