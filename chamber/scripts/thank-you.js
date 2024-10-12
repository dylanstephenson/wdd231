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

// Display form information
const currentUrl = window.location.href;

const wholeUrl = currentUrl.split("?");

let formData = wholeUrl[1].split("&");
console.log(formData);

function show(data) {
    formData.forEach(element => {
        if (element.startsWith(data)) {
            result = element.split("=")[1].replace("%40", "@").replaceAll("+", " ");
        }
    })
    return result;
}

const showData = document.querySelector("#results-card");
showData.innerHTML = `
<h3>Contact information</h3>
<ul id="contact-details">
    <li><strong>Name:</strong> ${show("first")} ${show("last")}</li>
    <li><strong>Your Email:</strong> ${show("email")}</li>
    <li><strong>Your Phone:</strong> ${show("phone")}</li>
</ul>
<h3>Organization Details</h3>
<ul id="organization-details">
    <li><strong>Organization Name:</strong> ${show("organization")}</li>
</ul>
`;
const organizationDetails = document.querySelector("#organization-details");

if (show("title") != "") {
    const title = document.createElement("li");
    title.innerHTML = `<strong>Your Title:</strong> ${show("title")}`;
    organizationDetails.appendChild(title);
};

if (show("description") != "") {
    const description = document.createElement("li");
    description.innerHTML = `<strong>Organization Description:</strong> ${show("description")}`;
    organizationDetails.appendChild(description);
};

const timestamp = document.createElement('p');
timestamp.innerHTML = show("timestamp").replaceAll("%2C", ",").replaceAll("%3A", ":");
showData.appendChild(timestamp);

