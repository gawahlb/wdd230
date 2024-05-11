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