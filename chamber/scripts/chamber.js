const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

let currentSave = new Date(document.lastModified);
const options = { month: 'long', day: 'numeric', year: 'numeric' };
let latestSave = currentSave.toLocaleDateString('en-us', options);
let footerSaveDate = document.getElementById('lastModified');
footerSaveDate.textContent = latestSave;


const visitDisp = document.querySelector(".visits");
const msToDays = 86400000;
const dateToday = new Date();
const today = Date.now();

let lastVisit = Number(window.localStorage.getItem("lastVisited"));

if (lastVisit == null) {
    visitDisp.textContent = `Welcome! Let us know if you have any questions.`;
} else if ((today - lastVisit) < msToDays) {
    visitDisp.textContent = `Back so soon? Awesome!`;
} else {
    let daysAgo = (today - lastVisit) / msToDays;
    visitDisp.textContent = `You last visited ${daysAgo.toFixed(0)} days ago.`

}


localStorage.setItem("lastVisited", today);

const title = document.querySelector("#title");

function titleValidation() {
    if (title.length < 7) {
        title.setCustomValidity("Field should be at least 7 characters long");
    } else {
        title.setCustomValidity("");
    }
}

title.onkeyup = titleValidation;

const date = new Date();
const timestamp = document.querySelector("#timestamp");

timestamp.textContent(date.today);




const currentWeather = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=33.41&lon=-111.82&units=imperial&appid=b621ddf1b42de9cf4add4ef7671da79c';


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

    let desc = data.weather[0].description;
    weatherDesc.textContent = `${desc}`;
}

apiFetch();

const highlights = document.querySelector('#spotlights');
const companyURL = "https://gawahlb.github.io/wdd230/chamber/data/members.json";

async function getCompany() {
    const response = await fetch(companyURL);
    const data = await response.json();
    displayCompany(data.companies);
}

getCompany();

const displayCompany = (companies) => {
    companies.forEach((company) => {
        let name = document.createElement("h3");
        let logo = document.createElement("img");
        let number = document.createElement("p");

        name.textContent = `${company.name}`;
        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `${company.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', "300");
        number.textContent = `${company.number}`;

        highlights.appendChild(name);
        highlights.appendChild(logo);
        highlights.appendChild(number);
    });
}