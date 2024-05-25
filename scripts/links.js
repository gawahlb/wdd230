const baseURL = "https://gawahlb.github.io/wdd230";
const linksURL = "https://gawahlb.github.io/wdd230/data/links.json";
const infoLine = document.querySelector("#new-line");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        let line = document.createElement("li");
        let weekName = document.createElement("h4");

        line.appendChild(weekName);

        weekName.textContent = `${week.week}: `;
        week.links.forEach((link) => {
            let fullLink = document.createElement("a");

            fullLink.textContent = `| ${link.title} |`;
            fullLink.setAttribute("href", link.url);

            line.appendChild(fullLink);
        });

        infoLine.appendChild(line);
    });
}

getLinks();