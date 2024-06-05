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


document.addEventListener('DOMContentLoaded', () => {
    let visitDisp = document.querySelector(".visits");
    const msToDays = 86400000;
    const dateToday = new Date();
    const today = Date.now();

    let lastVisit = Number(window.localStorage.getItem("lastVisited"));

    if (lastVisit == null) {
        visitDisp.textContent = `Welcome! Let us know if you have any questions.`;
    } else if ((today - lastVisit) < msToDays) {
        visitDisp.innerText = "Back so soon? Awesome!";
    } else {
        let daysAgo = (today - lastVisit) / msToDays;
        visitDisp.textContent = `You last visited ${daysAgo.toFixed(0)} days ago.`;
    }


    localStorage.setItem("lastVisited", today);

    const title = document.querySelector("#title");

    function titleValidation() {
        if (title.value.length < 7) {
            title.setCustomValidity("Field should be at least 7 characters long");
        } else {
            title.setCustomValidity("");
        }
    }

    title.onkeyup = titleValidation;

    const date = new Date();
    const timestamp = document.querySelector("#timestamp");

    timestamp.textContent = date;

});


const currentWeather = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const tomorrow = document.querySelector('#tomorrow');
const twoDays = document.querySelector('#twoDays');
const threeDays = document.querySelector('#threeDays');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.41&lon=-111.82&units=imperial&appid=b621ddf1b42de9cf4add4ef7671da79c';


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
    currentWeather.innerHTML = `Current Temp - ${data.list[0].main.temp}&deg;F`;

    let desc = data.list[0].weather[0].description;
    let tom = data.list[2].main.temp;
    let twoDay = data.list[10].main.temp;
    let threeDay = data.list[18].main.temp;
    weatherDesc.textContent = `Description - ${desc}`;
    tomorrow.innerHTML = ` Tomorrow - ${tom}&deg;F`;
    twoDays.innerHTML = `2 Day - ${twoDay}&deg;F`;
    threeDays.innerHTML = `3 Day - ${threeDay}&deg;F`;
}

apiFetch();




const highlights = document.querySelector('#spotlights');
const compURL = "https://gawahlb.github.io/wdd230/chamber/data/members.json";

async function getComp() {
    const response = await fetch(compURL);
    const data = await response.json();
    displayComp(data.companies);
}

getComp();

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



const displayComp = (companies) => {

    let i = 0
    while (i < 2) {
        let randInt = getRandomIntInclusive(0, 6);
        let randComp = companies[randInt];
        let usedInt;

        if (usedInt != randInt && randComp.level == "Silver" || randComp.level == "Gold") {
            let name = document.createElement("h3");
            let number = document.createElement("p");

            name.textContent = `${randComp.name}`;
            number.textContent = `${randComp.number}`;

            highlights.appendChild(name);
            highlights.appendChild(number);
            usedInt = randInt;
            i++;
        };

    };
};

const date = new Date();
let day = date.getDay();

if (day == 1 || day == 2 || day == 3) {

    const banner = document.querySelector('#inviteBanner');
    const close = document.querySelector('#closeBanner');
    const msg = document.querySelector('#bannerMsg');

    msg.textContent = ` Join us this Wednesday at 7:00 PM for a Chamber of
    Commerce meet
    and greet. All visitors and
    members
    welcome!`;

    close.addEventListener("click", function () {
        banner.style.display = 'none';
    });
}
