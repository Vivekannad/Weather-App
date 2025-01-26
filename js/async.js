const API_KEY = 'a1da50b697cef0861a7a70b0f6461024';
// let city = 'karachi'
const WEATHER_API  = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric&q=`;

export async function getWeather (city) {
    const response = await fetch(WEATHER_API + city );
    const data = await response.json();

    return data;
}


