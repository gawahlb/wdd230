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
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");

modeButton.addEventListener("click", () => {
    body.classList.toggle('dark-mode')
    main.classList.toggle('dark-mode');
    header.classList.toggle('header-dark-mode');
    nav.classList.toggle('dark-mode');
    ul.classList.toggle('dark-mode');
});