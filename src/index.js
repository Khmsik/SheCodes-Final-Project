function refreshWeather(response) {
  let temparatureElement = document.querySelector("#temperature");
  let temparature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temparatureElement.innerHTML = Math.round(temparature);
  console.log(response.data.temperature.current);
}

function searchCity(city) {
  let apiKey = "ftfbf11cfa34eef80a3390405e4eo3f3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
