// functions for weather desktop
function updateWeather() {
    const myKey = config.MY_KEY;
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Skopje&units=metric&appid=' + myKey;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var temperature = Math.round(data.main.temp);
            var weatherDescription = data.weather[0].description;
            var formattedWeather = temperature + '°C, ' + weatherDescription;
            document.getElementById("weather").innerHTML = formattedWeather;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// functions for weather mobile
function updateWeather2() {
    const myKey2 = config.MY_KEY;
    var apiUrl2 = 'https://api.openweathermap.org/data/2.5/weather?q=Skopje&units=metric&appid=' + myKey2;
    fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
            var temperature2 = Math.round(data.main.temp);
            var weatherDescription2 = data.weather[0].description;
            var formattedWeather2 = temperature2 + '°C, ' + weatherDescription2;
            document.getElementById("weather2").innerHTML = formattedWeather2;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

setInterval(updateWeather, 3600000);
setInterval(updateWeather2, 3600000);

updateWeather();
updateWeather2();