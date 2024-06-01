# Weather App
This application allows users to search for the weather in a specific location by entering the city name.
It uses the Google Geocoding API to convert the city name to coordinates and the OpenWeatherAPI to retrieve the weather data.


## Features
- Enter a location to retrieve its coordinates using the Google Geocoding API.
- Display weather information and various details for the retrieved location using the OpenWeatherAPI.


## Requirements
1. A personal Google Gecoding API key is required.
2. A personal OpenWeather API key is required.


## Setup
1. Clone the repository:
```sh
git clone http://github.com/j1unyeong/weather-app.git
cd weather-app
```

2. Open script.js and add your API Keys:
```javascript
const geocodeAPIkey = "YOUR_GECODING_API_KEY" // Google Geocoding api key
const weatherAPIkey = 'YOUR_OPENWEATHERMAP_API_KEY' // OpenWeather API KEY
```

3. Open index.html in your web browser.


## Usage
1. Open index.html in your web browser.
2. Enter the city name in the input field.
3. Click the "Search" button to retrieve the weather information.


## License
This project uses the Google Geocoding API. For more information, see the [Google Maps Platform Terms of Service](https://cloud.google.com/maps-platform/terms).
This project uses the OpenWeatherMap Api. For more information, see the [OpenWeatherMap Terms of Service](https://openweathermap.org/terms).