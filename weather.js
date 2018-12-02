const API_KEYS = "63c3e210062f9fb0bcfbbc75395d33d9";
const COORDS = "coord";
const weather = document.querySelector(".js-weather");

function getWeather(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEYS}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      weather.innerText = `${json.main.temp} @ ${json.name}`;
    });
}

function handleError() {
  console.log("Sorry, We can't get your location");
}

function saveLocation(obj) {
  localStorage.setItem(COORDS, JSON.stringify(obj));
}

function handleSuccess(position) {
  const obj = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  };
  saveLocation(obj);
  getWeather(obj.latitude, obj.longitude);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function init() {
  const location = JSON.parse(localStorage.getItem(COORDS));
  if (location === null) {
    askForCoords();
  } else {
    getWeather(location.latitude, location.longitude);
  }
}

init();
