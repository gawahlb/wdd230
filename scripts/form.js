const value = document.getElementById("ratingvalue");
const range = document.getElementById("page_rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    value.innerHTML = range.value;
}

const pw = document.querySelector("#password");
const repeat = document.querySelector("#repeat_password");

function passwordValidation() {
    if (pw.value != repeat.value) {
        repeat.setCustomValidity("Entered passwords do not match");
    } else {
        repeat.setCustomValidity("");
    }
}

pw.onchange = passwordValidation;
repeat.onkeyup = passwordValidation;