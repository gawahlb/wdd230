let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let footerYear = document.getElementById('currentYear');
footerYear.textContent = currentYear;

let currentSave = new Date(document.lastModified);
const options = { month: 'long', day: 'numeric', year: 'numeric' };
let latestSave = currentSave.toLocaleDateString('en-us', options);
let footerSaveDate = document.getElementById('lastModified');
footerSaveDate.textContent = latestSave;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const section = document.querySelector(".learning-card");
const h2 = document.querySelector("h2");
const infoH2 = document.querySelector(".info-h2");
const infoCard = document.querySelector(".info-card");

modeButton.addEventListener("click", () => {
    body.classList.toggle('dark-mode')
    main.classList.toggle('dark-mode');
    header.classList.toggle('header-dark-mode');
    section.classList.toggle('section-dark-mode');
    infoH2.classList.toggle('section-dark-mode');
    h2.classList.toggle('section-dark-mode');
    infoCard.classList.toggle('section-dark-mode');
});

const visitDisp = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitDisp.textContent = numVisits;
} else {
    visitDisp.textContent = `0`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

const currentWeather = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.19&lon=-111.55&units=imperial&appid=b621ddf1b42de9cf4add4ef7671da79c';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentWeather.innerHTML = `${data.main.temp}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `Weather Icon`);
    weatherDesc.textContent = `${desc}`;
}

apiFetch();