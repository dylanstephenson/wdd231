const topMovieIds = 
[
    "tt15398776",
    "tt13238346",  
    "tt14230458",       
    "tt14849194",    
    "tt5537002",    
    "tt6710474",    
    "tt1745960",        
    "tt11127680",    
    "tt1877830",    
    "tt11813216",    
    "tt1160419" ,    
    "tt14039582",    
    "tt8847712",        
    "tt3661210",       
    "tt9735470",       
    "tt8503618",    
    "tt7146812",    
    "tt9686708",    
    "tt1051906",    
    "tt7504726",     
    "tt6751668",    
    "tt8579674",    
    "tt8613070",    
    "tt2584384",    
    "tt7131622"
]

const choiceMovieIds = [
    "tt0167261",
    "tt0093779",
    "tt0304141",
    "tt0057546",
    "tt0120616",
    "tt3322312",
    "tt10872600",
    "tt9362722",
    "tt0468569",
    "tt1843866",
    "tt1631867",
    "tt0936501",
    "tt0258463",
    "tt0325710",
    "tt0293662",
    "tt3544112",
    "tt4698684",
    "tt0120483",
    "tt0092086",
    "tt0071853",
    "tt6644200",
    "tt1457767",
    "tt0482571",
    "tt0286106",
    "tt0062467"
];

const allMovies = [
    "tt15398776",
    "tt13238346",  
    "tt14230458",       
    "tt14849194",    
    "tt5537002",    
    "tt6710474",    
    "tt1745960",        
    "tt11127680",    
    "tt1877830",    
    "tt11813216",    
    "tt1160419" ,    
    "tt14039582",    
    "tt8847712",        
    "tt3661210",       
    "tt9735470",       
    "tt8503618",    
    "tt7146812",    
    "tt9686708",    
    "tt1051906",    
    "tt7504726",     
    "tt6751668",    
    "tt8579674",    
    "tt8613070",    
    "tt2584384",    
    "tt7131622",
    "tt0167261",
    "tt0093779",
    "tt0304141",
    "tt0057546",
    "tt0120616",
    "tt3322312",
    "tt10872600",
    "tt9362722",
    "tt0468569",
    "tt1843866",
    "tt1631867",
    "tt0936501",
    "tt0258463",
    "tt0325710",
    "tt0293662",
    "tt3544112",
    "tt4698684",
    "tt0120483",
    "tt0092086",
    "tt0071853",
    "tt6644200",
    "tt1457767",
    "tt0482571",
    "tt0286106",
    "tt0062467"
]

async function getData(movieId) {
    const url = `https://www.omdbapi.com/?i=${movieId}&plot=short&apikey=3d93d6d5`
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.log(response.text());
        }
    } 
    catch (error) {
        console.error(error);
    }
}

async function displayPoster(container, movieId) {
    const data = await getData(movieId);

    const posterFigure = document.createElement("figure");
    posterFigure.classList = "slide";
    const posterImg = document.createElement("img");
    posterImg.setAttribute("class", "poster-img")
    posterImg.setAttribute("src", data.Poster);
    posterImg.setAttribute("alt", data.Title);
    posterImg.setAttribute("loading", "lazy");
    posterImg.setAttribute("width", 200);

    const imdbId = document.createElement("p");
    imdbId.hidden = true;
    imdbId.innerHTML = data.imdbID;

    posterFigure.appendChild(imdbId);
    posterFigure.appendChild(posterImg);
    container.appendChild(posterFigure);

    const modal = document.createElement("dialog")
    modal.innerHTML = "";
    const closeModal = document.createElement("button")
    closeModal.setAttribute("id","close-modal");
    closeModal.textContent = "X";

    const cardHeader = document.createElement("h3");
    const synopsis = document.createElement("p");
    const actorList = document.createElement("p");
    const imdbRating = document.createElement("p");

    cardHeader.innerHTML = data.Title;
    synopsis.innerHTML = `<strong>PLOT:</strong> ${data.Plot}`;
    actorList.innerHTML = `<strong>STARS:</strong> ${data.Actors}`;
    imdbRating.innerHTML = `<strong>IMDB RATING:</strong> ${data.imdbRating}`;

    modal.appendChild(closeModal);
    modal.appendChild(cardHeader);
    modal.appendChild(synopsis);
    modal.appendChild(actorList);
    modal.appendChild(imdbRating);
    container.appendChild(modal)

    posterImg.addEventListener("click", () => {
        modal.showModal();
    })

    closeModal.addEventListener("click", () => {
        modal.close();
    })

    }

    async function displayRandomMovie(container, movieId) {
        const data = await getData(movieId);

        const modal = document.createElement("dialog")
        modal.setAttribute("class","movie-modal");
        modal.innerHTML = "";
        const closeModal = document.createElement("button")
        closeModal.setAttribute("id","close-modal");
        closeModal.textContent = "X";

        const cardHeader = document.createElement("h3");
        const synopsis = document.createElement("p");
        synopsis.setAttribute("class","random-p")
        const actorList = document.createElement("p");
        actorList.setAttribute("class","random-p")
        const imdbRating = document.createElement("p");
        imdbRating.setAttribute("class","random-p");

        cardHeader.innerHTML = data.Title;
        synopsis.innerHTML = `<strong>PLOT:</strong> ${data.Plot}`;
        actorList.innerHTML = `<strong>STARS:</strong> ${data.Actors}`;
        imdbRating.innerHTML = `<strong>IMDB RATING:</strong> ${data.imdbRating}`;

        modal.appendChild(closeModal);
        modal.appendChild(cardHeader);
        modal.appendChild(synopsis);
        modal.appendChild(actorList);
        modal.appendChild(imdbRating);
        container.appendChild(modal)

        modal.showModal();

        closeModal.addEventListener("click", () => {
            modal.close();
        })
    }



export { topMovieIds, choiceMovieIds, allMovies, displayPoster, displayRandomMovie };

