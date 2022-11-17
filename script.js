let cityName = document.getElementById("city-name");
let weatherType = document.getElementById("weather-type");
let temp = document.getElementById("temp");
let minTemp = document.getElementById("min-temp");
let maxTemp = document.getElementById("max-temp");

getWeatherData = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3c08c19830mshfe76c94a6519f11p1e7720jsnced16ff6c564",
      "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
    },
  };
  const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${city}&contentType=json&unitGroup=metric&shortColumnNames=0`;
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      cityName.innerText = response.locations[`${city}`].id;
      weatherType.innerText =
        response.locations[`${city}`].currentConditions.icon;
      temp.innerText = response.locations[`${city}`].currentConditions.temp;
      maxTemp.innerText = response.locations[`${city}`].values[0].maxt;
      minTemp.innerText = response.locations[`${city}`].values[0].mint;
    })
    .catch((err) => {
      console.error(err);
      cityName.innerText = "This is not a valid city name, try again";
      weatherType.innerText = "---";
      temp.innerText = "---";
      maxTemp.innerText = "---";
      minTemp.innerText = "---";
    });
};

const searchCity = () => {
  const city = document.getElementById("city-input").value;

  getWeatherData(city);
};
