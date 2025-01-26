
const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humid-scale");
const windSpeed = document.querySelector(".wind-scale");
const weatherForecast = document.querySelector(".weather-icon");
const weatherDescription = document.querySelector(".description");

export function updateCard (city , temp , humid , wind , forecast, icon , description) {
    cityName.innerText = city;
    temperature.innerText = `${Math.round(temp)}°C`;
    humidity.innerText = `${humid}%`;
    windSpeed.innerText = `${wind} km/hr`;
    weatherForecast.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@4x.png`);
    weatherForecast.setAttribute("alt", forecast);
    weatherDescription.innerText = description;
}
