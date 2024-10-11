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

// create membership modals
const url = "https://dylanstephenson.github.io/wdd231/chamber/data/membership-level.json"

async function getLevelData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        npButton.addEventListener("click", () => {
            displayModal(data, nonProfitMem, 0);
        })
        standardButton.addEventListener("click", () => {
            displayModal(data, standardMem, 1);
        })
        silverButton.addEventListener("click", () => {
            displayModal(data, silverMem, 2);
        })
        goldButton.addEventListener("click", () => {
            displayModal(data, goldMem, 3);
        })
    }
}

const nonProfitMem = document.querySelector("#non-profit");
const standardMem = document.querySelector("#standard");
const silverMem = document.querySelector("#silver");
const goldMem = document.querySelector("#gold");

const npButton = document.querySelector("#np-button");
const standardButton = document.querySelector("#standard-button");
const silverButton = document.querySelector("#silver-button");
const goldButton = document.querySelector("#gold-button");

function displayModal(data, modal, index) {
    modal.innerHTML = "";
    const closeModal = document.createElement("button")
    closeModal.setAttribute("id","close-modal"); 
    closeModal.textContent = "X";

    const modalName = document.createElement("h2"); 
    modalName.innerHTML = data[index].name;
    const modalCost = document.createElement("p");
    modalCost.innerHTML = data[index].cost;
    const modalBenefits = document.createElement("h3")
    modalBenefits.innerHTML = "Benefits";
    const modalList = document.createElement("ul");
    data[index].benefits.forEach(benefit => {
        const benefitItem = document.createElement("li") 
        benefitItem.innerHTML = benefit;
        modalList.appendChild(benefitItem);
    })

    modal.appendChild(closeModal);
    modal.appendChild(modalName);
    modal.appendChild(modalCost);
    modal.appendChild(modalBenefits);
    modal.appendChild(modalList);

    modal.showModal();
    
    closeModal.addEventListener("click", () => {
        modal.close();
    })
}

getLevelData();