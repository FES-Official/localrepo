let input = document.querySelector("input");
let btn = document.querySelector("button");

// http://api.weatherapi.com/v1/current.json?key=31d9e5d0058249c782d204119252905&q=London&aqi=yes
async function getdata(cityname) {
  let calldata = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=31d9e5d0058249c782d204119252905&q=${cityname}&aqi=yes`
  );
  return await calldata.json();
}
btn.addEventListener("click", async function getWeather() {
  let value = input.value;
  let result = await getdata(value);
  const LocationName = document.querySelector(".section-title");
  LocationName.innerHTML = `${result.location.name}, ${result.location.country}`;
  let tamprature = document.querySelector(".tamprature");
  tamprature.innerHTML = `${result.current.temp_c}&deg;`;
  let last_updated = document.querySelector(".last-updated");
  last_updated.innerHTML = `Last Updated: ${result.current.last_updated}`;
  let wind_speed = document.querySelector(".wind-speed");
  wind_speed.innerHTML = `${result.current.wind_mph} kph`;
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = `${result.current.humidity}%`;
  let latitude = document.querySelector(".latitude");
  latitude.innerHTML = `${result.location.lat}`;
  let longitude = document.querySelector(".longitude");
  longitude.innerHTML = `${result.location.lon}`;
  let pressure = document.querySelector(".pressure");
  pressure.innerHTML = `${result.current.pressure_mb}`;
  let cloud = document.querySelector(".cloud");
  cloud.innerHTML = `${result.current.cloud}`;
  let local_time = document.querySelector(".local-time");
  local_time.innerHTML = `${result.location.localtime}`;
  let uv_index = document.querySelector(".uv-index");
  uv_index.innerHTML = `${result.current.uv}`;
  let weather_status = document.querySelector(".weather-status");
  weather_status.innerHTML = `${result.current.condition.text}`;
  console.log(result);
});
