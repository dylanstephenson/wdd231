import { topMovieIds, choiceMovieIds, displayPoster, displayRandomMovie, allMovies } from "./movie-cards.mjs";

// Display posters on home page

const criticalRatingPoster = document.getElementById("critically-rated");
const choicePosters = document.getElementById("dylans-choice");

const randomTopMovie = pickRandomMovie(topMovieIds, 3);
const randomChoiceMovie=pickRandomMovie(choiceMovieIds, 3);

// List random movies for slide show
randomTopMovie.forEach(movieId => {
    displayPoster(criticalRatingPoster, movieId);
})

randomChoiceMovie.forEach(movieId => {
    displayPoster(choicePosters, movieId)
})

function pickRandomMovie(idList, number) {
    const randomIdList = []
    for (var i = 0; i < number; i++) {
        let randomNumber = Math.floor(Math.random() * idList.length);
        let randomId = idList[randomNumber];
        idList.splice(randomNumber, randomNumber)
        randomIdList.push(randomId);
    }
    return randomIdList
}

// display form Modal

const formModal = document.querySelector("#form-modal")
const suggestButton = document.querySelector("#suggest-button")

suggestButton.addEventListener("click", () => {
    formModal.showModal();
})

// Display Random Movie

const randomButton = document.querySelector("#random-button");
const randomModal = document.querySelector("#random-modal");

randomButton.addEventListener("click", () => {
    displayRandomMovie(randomModal, pickRandomMovie(allMovies, 1));
})

// Menu Button
//creating responsive nav
const hamburgerElement = document.querySelector("#menuButton");
const navElement = document.querySelector("#animateMe");

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})
