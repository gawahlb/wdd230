let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let footerYear = document.getElementById('currentYear');
footerYear.textContent = currentYear;

let currentSave = new Date(document.lastModified);
const options = { month: 'long', day: 'numeric', year: 'numeric' };
let latestSave = currentSave.toLocaleDateString('en-us', options);
let footerSaveDate = document.getElementById('lastModified');
footerSaveDate.textContent = latestSave;