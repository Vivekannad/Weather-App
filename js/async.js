import {API_KEY} from "./API.js"

const WEATHER_API  = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric&q=`;

export async function getWeather (city) {
    const response = await fetch(WEATHER_API + city );
    const data = await response.json();

    return data;
}


