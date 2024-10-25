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
<h3>Contact Information</h3>
<ul id="movie-submission">
    <li><strong>NAME:</strong> ${show("first")} ${show("last")}</li>
    <li><strong>EMAIL:</strong> ${show("email")}</li>
</ul>
<h3>Movie Details</h3>
<ul id="movie-details">
    <li><strong>MOVIE TITLE:</strong> ${show("title")}</li>
</ul>
`;
const movieDetails = document.querySelector("#movie-details");

if (show("description") != "") {
    const description = document.createElement("li");
    description.innerHTML = `<strong>PLOT:</strong> ${show("description")}`;
    movieDetails.appendChild(description);
};

if (show("actor-list") != "") {
    const stars = document.createElement("li");
    stars.innerHTML = `<strong>STARS:</strong> ${show("actor-list")}`;
    movieDetails.appendChild(stars);
};

if(show("imdb-rating") != "") {
    const ratings = document.createElement("li");
    ratings.innerHTML = `<strong>IMDB RATING</strong> ${show("imdb-rating")}`
    movieDetails.appendChild(ratings)
}

const Id = document.createElement("li");
Id.innerHTML = `<strong>IMDB ID:</strong> ${show("imdb-id")}`
movieDetails.appendChild(Id)

if(show("drop-down") != "") {
    const genre = document.createElement("li");
    genre.innerHTML = `<strong>GENRE:</strong> ${show("drop-down")}`
    movieDetails.appendChild(genre)
}

// Creating local storage to display how many movies have been suggested through the form.

const submittedMessage = document.querySelector("#forms-submitted")
const formNumber = Number(localStorage.getItem("form-number") ?? 1);
const newNumber = formNumber + 1;
localStorage.setItem("form-number", newNumber);

function displayFormNumber() {
    submittedMessage.innerHTML = "";
    if (formNumber < 2) {
        submittedMessage.innerHTML = "Thank you for your first movie suggestion!"
    }
    else if (formNumber < 3 && formNumber > 1 ) {
        submittedMessage.innerHTML = `You have submitted ${formNumber} movie suggestions! Awesome!`
    }
    else {
        submittedMessage.innerHTML = `Wow, you have submitted ${formNumber} movie suggestions! You're on a roll!`
    }
}

window.onload =(event) => {
    displayFormNumber();
}