const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        card.className = "card";
        const fullName = document.createElement("h2");
        const birthday = document.createElement("p");
        const birthplace = document.createElement("p");
        const portrait = document.createElement("img");

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birthday.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        birthplace.innerHTML = `Place of Birth: ${prophet.birthplace}`

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "220");
        portrait.setAttribute("height", "300");

        card.appendChild(fullName);
        card.appendChild(birthday);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();

