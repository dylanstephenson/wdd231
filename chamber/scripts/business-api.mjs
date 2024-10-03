
const url = "https://dylanstephenson.github.io/wdd231/chamber/data/members.json";

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function displayMemberCards(members, cards) {
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
        logo.setAttribute("height", "180");
        logo.setAttribute("width", "320");

        name.innerHTML = member.name;
        address.innerHTML = member.address;
        phoneNum.innerHTML = member.phoneNumber;

        website.classList = "business-url"
        website.setAttribute("href", member.websiteUrl);
        website.setAttribute("target", "_blank");
        website.innerHTML = member.websiteUrl;

        membership.innerHTML = `Membership: ${member.membership}`

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNum);
        card.appendChild(website);
        card.appendChild(membership);

        cards.appendChild(card);
    })

}

export { url, getMemberData, displayMemberCards };