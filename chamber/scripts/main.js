
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

// creating a ripple effect on join button

function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span")
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
}

const joinButton = document.getElementById("join-link")
joinButton.addEventListener("click", createRipple)

// Use OpenWeatherMap API to display weather information

const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const iconCaption = document.getElementById("weather-caption");
const highTemp = document.getElementById("high-temp");
const lowTemp = document.getElementById("low-temp");
const firstDayTemp = document.getElementById("first-day-temp");
const secondDayTemp = document.getElementById("second-day-temp");
const thirdDayTemp = document.getElementById("third-day-temp");
const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=40.66684339859632&lon=-111.88403529097242&appid=b7025480ecf693f3a6d458eefed62277&units=imperial";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=40.66684339859632&lon=-111.88403529097242&cnt=24&appid=b7025480ecf693f3a6d458eefed62277&units=imperial";

async function currentWeatherApiFetch() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayCurrentWeather(data);
        }
        
    } catch (error) {
        console.log(error)
    }
}
async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        }
    } catch (error) {
        console.log(error)
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    iconCaption.innerHTML = desc;
    highTemp.innerHTML = `High: ${data.main.temp_max}&deg;`;
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;`;
}
function displayForecast(data) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    firstDayTemp.innerHTML = `Tomorrow: ${data.list[7].main.temp}&deg;F`;
    const secondDay = new Date(data.list[15].dt_txt);
    const secondDayIndex = secondDay.getDay();
    const secondDayName = daysOfWeek[secondDayIndex];
    secondDayTemp.innerHTML = `${secondDayName}: ${data.list[15].main.temp}&deg;F`;
    const thirdDay = new Date(data.list[23].dt_txt);
    const thirdDayIndex = thirdDay.getDay();
    const thirdDayName = daysOfWeek[thirdDayIndex];
    thirdDayTemp.innerHTML = `${thirdDayName}: ${data.list[23].main.temp}&deg;F`;
}

currentWeatherApiFetch();
forecastApiFetch();
