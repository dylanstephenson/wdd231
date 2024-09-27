const url = "https://dylanstephenson.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector("#business-cards");
const listView = document.querySelector("#list-view");
const gridView = document.querySelector("#grid-view");
const tableBody = document.querySelector("tbody");

//creating responsive nav
const hamburgerElement = document.querySelector("#menuButton");
const navElement = document.querySelector("#animateMe");

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMemberCards(data.members);
    gridView.classList = 'selected';
    listView.addEventListener('click', () => {
        cards.innerHTML='';
        tableBody.innerHTML='';
        gridView.classList = "";
        listView.classList = "selected"
        displayMemberTable(data.members);
    })
    gridView.addEventListener('click', () => {
        cards.innerHTML='';
        tableBody.innerHTML='';
        gridView.classList = 'selected';
        listView.classList = ''
        displayMemberCards(data.members);
    })
    
}

const displayMemberCards = (members) => {
    members.forEach(member => {
        const card = document.createElement("section");
        card.classList = "card";
        const logo = document.createElement("img");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phoneNum = document.createElement("p");
        const website = document.createElement("a");
        const membership = document.createElement("p");

        logo.setAttribute("id", member.id)
        logo.setAttribute("src", member.imageUrl);
        logo.setAttribute("alt",`${member.name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("height", "150");
        logo.setAttribute("width", "300");

        name.innerHTML = member.name;
        address.innerHTML = member.address;
        phoneNum.innerHTML = member.phoneNumber;

        website.classList = "business-url"
        website.setAttribute("href", member.websiteUrl);
        website.setAttribute("target", "_blank");
        website.innerHTML = member.websiteUrl;

        membership.innerHTML = `Membership: ${member.membership}`

        card.appendChild(logo)
        card.appendChild(name)
        card.appendChild(address)
        card.appendChild(phoneNum)
        card.appendChild(website)
        card.appendChild(membership)

        cards.appendChild(card)
    })
}

const displayMemberTable= (members) => {
    members.forEach(member => {
        const table = document.createElement("tr")
        table.classList = `member-${member.membership}`;
        const name = document.createElement("td");
        const address = document.createElement("td");
        const phoneNum = document.createElement("td");
        const website = document.createElement("td");

        name.innerHTML = `<a href="${member.websiteUrl}" target="_blank">${member.name}</a>`;
        address.innerHTML = member.address;
        phoneNum.innerHTML = member.phoneNumber;

        table.appendChild(name)
        table.appendChild(address)
        table.appendChild(phoneNum)
        // table.appendChild(website)

        tableBody.appendChild(table)
    })
}

getMemberData();