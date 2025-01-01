function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  let apiKey = "4d6d3a603f2o058afbtc1e8fa6515357";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&=metric`;
  let currentTemp = document.querySelector(".current-temperature-value");
  let description = document.querySelector("#description");
  let windSpeed = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");
  function returnTemperature(result) {
    let localTemp = Math.round(result.data.temperature.current);
    currentTemp.innerHTML = localTemp;
    cityElement.innerHTML = result.data.city;
    description.innerHTML = result.data.condition.description;
    windSpeed.innerHTML = `${Math.round(result.data.wind.speed)} km/h`;
    humidity.innerHTML = `${result.data.temperature.humidity}%`;
  }
  axios.get(apiUrl).then(returnTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);
