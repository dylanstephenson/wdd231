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