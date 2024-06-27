/*document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'TU_CLAVE_DE_API';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ciudad&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.querySelector('.weather-info');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const cityName = data.name;
            const country = data.sys.country;

            weatherInfo.innerHTML = `
                <h2>${cityName}, ${country}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});*/




/*
{
    "coord": {
      "lon": -58.3772,
      "lat": -34.6132
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 13.78,
      "feels_like": 13.33,
      "temp_min": 12.85,
      "temp_max": 16.58,
      "pressure": 1017,
      "humidity": 81
    },
    "visibility": 10000,
    "wind": {
      "speed": 9.39,
      "deg": 180,
      "gust": 11.18
    },
    "clouds": {
      "all": 40
    },
    "dt": 1718117838,
    "sys": {
      "type": 2,
      "id": 2020613,
      "country": "AR",
      "sunrise": 1718103441,
      "sunset": 1718138962
    },
    "timezone": -10800,
    "id": 3435910,
    "name": "Buenos Aires",
    "cod": 200
  }
*/