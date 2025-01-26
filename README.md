# Weather App

A sleek and modern weather application that provides real-time weather information for any city worldwide. Built with HTML, CSS, and JavaScript, this app utilizes the OpenWeatherMap API to deliver accurate weather data.

## Features

- **Real-time Weather Data**: Get current weather information for any city
- **Search Functionality**: Easy-to-use search interface for finding cities
- **Detailed Weather Information**: 
  - Temperature in Celsius
  - Humidity percentage
  - Wind speed
  - Weather description with icons
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Default City**: Automatically displays weather for Karachi on load

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API
- Modular JavaScript with ES6 Modules

## Project Structure

```
Weather app/
├── index.html          # Main HTML file
├── style.css          # Styling file
├── js/
│   ├── app.js         # Main application logic
│   ├── async.js       # API handling
│   └── updateCard.js  # DOM updates
└── images/            # Contains app icons
```

## Setup

1. Clone this repository
2. Replace the `API_KEY` in `js/async.js` with your OpenWeatherMap API key
3. Open `index.html` in a modern web browser

## API Key

This app uses the OpenWeatherMap API. To use the app:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Get your API key
3. Replace the API key in `js/async.js`

## Features in Detail

- **Search Bar**: Enter any city name to get its weather information
- **Weather Display**:
  - Large temperature display in Celsius
  - City name
  - Weather condition with descriptive icon
  - Humidity percentage
  - Wind speed in km/hr

## Styling

The app features a modern gradient background and a clean, card-based design. The interface is intuitive with smooth transitions and a responsive layout that adapts to different screen sizes.

## Contributing

Feel free to fork this repository and submit pull requests to contribute to this project.

## License

This project is open source and available under the MIT License.
![App demo](<Screenshot 2025-01-27 003516.png>)