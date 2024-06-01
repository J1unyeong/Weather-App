document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    
    const geocodeAPIkey = "YOUR_GECODING_API_KEY" // Google Geocoding api key
    const weatherAPIkey = 'YOUR_OPENWEATHERMAP_API_KEY' // OpenWeather API KEY

    const geocodeAPIUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${geocodeAPIkey}`;

    fetch(geocodeAPIUrl)
        .then(response => response.json())
        .then(data=> {
            console.log(data);
            if (data.status === 'OK') {
                const location = data.results[0].geometry.location;
                const lat = location.lat;
                const lon = location.lng;

                const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIkey}`;

                fetch(weatherAPIUrl)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        if (data.cod === 200) {
                            const weatherResult = document.getElementById('weatherResult');
                            const temperature = (data.main.temp - 273.15).toFixed(2);
                            weatherResult.innerHTML = `
                            <h2>${data.name}</h2>
                            <p>Temperature: ${temperature}°C</p>
                            <p>Weather: ${data.weather[0].description}</p>
                            <p>Humidity: ${data.main.humidity}%</p>
                            <p>Wind Speed: ${data.wind.speed.toFixed(1)} m/s</p>
                            `;
                        } else {
                            document.getElementById('weatherResult').innerHTML = `<p>Weather data not found</p>`;
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching weather data: ', error);
                        document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data</p>`;
                    })
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>Location not found</p>`;
            }
        })
        .catch(error => {
            console.error('Error fatching location data: ', error);
            document.getElementById('weatherResult').innerHTML = `<p>Error fetching location data</p>`
        });
});