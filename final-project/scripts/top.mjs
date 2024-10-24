import { topMovieIds, displayPoster } from "./movie-cards.mjs";

const movieGrid = document.querySelector("#top-movies");

topMovieIds.forEach(movieId => {
    displayPoster(movieGrid, movieId);
})

const movies2023 = topMovieIds.slice(0, 5);
const movies2022 = topMovieIds.slice(5, 10);
const movies2021 = topMovieIds.slice(10, 15);
const movies2020 = topMovieIds.slice(15, 20);
const movies2019 = topMovieIds.slice(20);

const button2023 = document.getElementById("button2023")
button2023.addEventListener("click", () => {
    movieGrid.innerHTML = "";
    button2022.removeAttribute("class")
    button2021.removeAttribute("class")
    button2020.removeAttribute("class")
    button2019.removeAttribute("class")
    button2023.setAttribute("class","button-wayfinding");
    movies2023.forEach(movieId => {
        displayPoster(movieGrid, movieId);
    })
})

const button2022 = document.getElementById("button2022")
button2022.addEventListener("click", () => {
    movieGrid.innerHTML = "";
    button2023.removeAttribute("class")
    button2021.removeAttribute("class")
    button2020.removeAttribute("class")
    button2019.removeAttribute("class")
    button2022.setAttribute("class","button-wayfinding");
    movies2022.forEach(movieId => {
        displayPoster(movieGrid, movieId);
    })
})

const button2021 = document.getElementById("button2021")
button2021.addEventListener("click", () => {
    movieGrid.innerHTML = "";
    button2022.removeAttribute("class")
    button2023.removeAttribute("class")
    button2020.removeAttribute("class")
    button2019.removeAttribute("class")
    button2021.setAttribute("class","button-wayfinding");
    movies2021.forEach(movieId => {
        displayPoster(movieGrid, movieId);
    })
})

const button2020 = document.getElementById("button2020")
button2020.addEventListener("click", () => {
    movieGrid.innerHTML = "";
    button2022.removeAttribute("class")
    button2021.removeAttribute("class")
    button2023.removeAttribute("class")
    button2019.removeAttribute("class")
    button2020.setAttribute("class","button-wayfinding");
    movies2020.forEach(movieId => {
        displayPoster(movieGrid, movieId);
    })
})

const button2019 = document.getElementById("button2019")
button2019.addEventListener("click", () => {
    movieGrid.innerHTML = "";
    button2022.removeAttribute("class")
    button2021.removeAttribute("class")
    button2020.removeAttribute("class")
    button2023.removeAttribute("class")
    button2019.setAttribute("class","button-wayfinding");
    movies2019.forEach(movieId => {
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
