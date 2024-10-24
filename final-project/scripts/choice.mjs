import { choiceMovieIds, displayPoster } from "./movie-cards.mjs";

const movieGrid = document.querySelector(".movie-grid");

choiceMovieIds.forEach(movieId => {
    displayPoster(movieGrid, movieId);
})

const fantasyMovies = choiceMovieIds.slice(0,5);
const comicbookMovies = choiceMovieIds.slice(5,10);
const actionMovies = choiceMovieIds.slice(10,15);
const comedyMovies = choiceMovieIds.slice(15,20);
const horrorMovies = choiceMovieIds.slice(20);

const fantasyButton = document.querySelector("#fantasy-button");
fantasyButton.addEventListener("click", () => {
    movieGrid.innerHTML = "";
    fantasyMovies.forEach(movieId => {
        displayPoster(movieGrid, movieId);
    })
})

const comicbookButton = document.querySelector("#comicbook-button");
comicbookButton.addEventListener("click", () => {
    movieGrid.innerHTML = "";
    comicbookMovies.forEach(movieId => {
        displayPoster(movieGrid, movieId);
    })
})

const actionButton = document.querySelector("#action-button");
actionButton.addEventListener("click", () => {
    movieGrid.innerHTML = "";
    actionMovies.forEach(movieId => {
        displayPoster(movieGrid, movieId);
    })
})

const comedyButton = document.querySelector("#comedy-button");
comedyButton.addEventListener("click", () => {
    movieGrid.innerHTML = "";
    comedyMovies.forEach(movieId => {
        displayPoster(movieGrid, movieId);
    })
})

const horrorButton = document.querySelector("#horror-button");
horrorButton.addEventListener("click", () => {
    movieGrid.innerHTML = "";
    horrorMovies.forEach(movieId => {
        displayPoster(movieGrid, movieId);
    })
})

// Menu Button
//creating responsive nav
const hamburgerElement = document.querySelector("#menuButton");
const navElement = document.querySelector("#animateMe");

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})