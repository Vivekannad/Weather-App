import {getWeather} from "./async.js"
import { updateCard } from "./updateCard.js";

const cityInput = document.querySelector(".card input");
const searchBtn = document.querySelector(".card button");

searchBtn.addEventListener("click", () => {
    ValidateInputAndCityWeather();
})

document.addEventListener("DOMContentLoaded", () => {
    getCityWeather("Karachi");
})

 function ValidateInputAndCityWeather () {
    if(!cityInput.value){
        return;
    }
    getCityWeather(cityInput.value);
    cityInput.value = "";
}

async function getCityWeather (cityName) {
    const data = await getWeather(cityName);
    if(data.cod === '404') {
        alert("City not found!");
        return;
    }
    updateCard(data.name , data.main.temp , data.main.humidity , data.wind.speed , data.weather[0].main , data.weather[0].icon , data.weather[0].description);
}