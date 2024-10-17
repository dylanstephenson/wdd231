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

// Local storage current date
const msToDays = 86400000;
const dateMessage = document.querySelector("#local-storage");
const lastVisited = Number(localStorage.getItem("lastVisited") ??  new Date().getTime().toString());
const now = new Date().getTime();
localStorage.setItem("lastVisited", now.toString()); 

function displaySinceLastVisit() {
    dateMessage.innerHTML = "";
    if (lastVisited - now == 0) {
        dateMessage.innerHTML = "Welcome to the Site! Let us know if you have any questions"
    }
    else if (lastVisited - now < msToDays) {
        dateMessage.innerHTML = "Back so soon! Awesome!"
    }
    else {
        dateMessage.innerHTML = `Welcome back! You last visited ${Math.round(((lastVisited - now) / msToDays)* 10) / 10}`
    }
}

window.onload = (even) => {
    displaySinceLastVisit();
}