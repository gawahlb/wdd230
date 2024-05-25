const cards = document.querySelector('#cards');
const companyURL = "https://gawahlb.github.io/wdd230/chamber/data/members.json";

async function getCompany() {
    const response = await fetch(companyURL);
    const data = await response.json();
    displayCompany(data.companies);
}

getCompany();

const displayCompany = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let website = document.createElement("p");
        let level = document.createElement("p");
        let memberSince = document.createElement("p");

        name.textContent = `${company.name}`;
        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `${company.name} logo`);
        logo.setAttribute('loading', 'lazy');
        address.textContent = `${company.address}`;
        number.textContent = `${company.number}`;
        website.textContent = `${company.website}`
        level.textContent = `Membership level: ${company.level}`
        memberSince.textContent = `Member since: ${company.start - date}`


        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);
        card.appendChild(level);
        card.appendChild(memberSince);

        cards.appendChild(card);
    });
}