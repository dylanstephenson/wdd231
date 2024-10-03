import { url, getMemberData, displayMemberCards} from "./business-api.mjs";

const cards = document.querySelector("#business-cards");
const listView = document.querySelector("#list-view");
const gridView = document.querySelector("#grid-view");
const tableBody = document.querySelector("tbody");
const data = await getMemberData();

// Adding updated date and current year
const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

//creating responsive nav
const hamburgerElement = document.querySelector("#menuButton");
const navElement = document.querySelector("#animateMe");

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})

function displayListAndGrid(data) {
    displayMemberCards(data.members, cards);
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
        displayMemberCards(data.members, cards);
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

displayListAndGrid(data);