const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const iconCaption = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.765347575434056&lon=6.644641627586341&appid=b7025480ecf693f3a6d458eefed62277&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await Error(response.text()));
        }
     } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    iconCaption.innerHTML = desc;
}

apiFetch();