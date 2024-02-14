// functions for weather desktop
function updateWeather() {
    const myKey = config.key;
    var Url = 'https://api.openweathermap.org/data/2.5/weather?q=Skopje&units=metric&appid=' + myKey;
    fetch(Url)
        .then(response => response.json())
        .then(data => {
            var temperature = Math.round(data.main.temp);
            var icon = data.weather[0].icon;
            var imageURL = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
            var formattedWeather = temperature + '°C, ' + '<img src="' + imageURL + '">';
            document.getElementById("weather").innerHTML = formattedWeather;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// functions for weather mobile
function updateWeather2() {
    const myKey2 = config.key;
    var Url2 = 'https://api.openweathermap.org/data/2.5/weather?q=Skopje&units=metric&appid=' + myKey2;
    fetch(Url2)
        .then(response => response.json())
        .then(data => {
            var temperature2 = Math.round(data.main.temp);
            var icon2 = data.weather[0].icon;
            var imageURL2 = 'https://openweathermap.org/img/wn/' + icon2 + '@2x.png';
            var formattedWeather2 = temperature2 + '°C, ' + '<img src="' + imageURL2 + '">';
            document.getElementById("weather2").innerHTML = formattedWeather2;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

setInterval(updateWeather, 3600000);
setInterval(updateWeather2, 3600000);

updateWeather();
updateWeather2();