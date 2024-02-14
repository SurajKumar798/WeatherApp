const inputBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const weatherimg = document.querySelector('.weather-icon');
const cityName = document.querySelector('.cityName')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')
const weatherCondition = document.querySelector('.weatherCondition')
const windSpeed = document.querySelector('.windSpeed')
const location_not_found = document.querySelector('.location-not-found');
const weather = document.querySelector('.weather');

async function checkWeather(city){
   const apiKey = "b9a61638da6619aaa3790021e111ac26";
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   const weather_data = await fetch(`${url}`).then
   (response => response.json());
    console.log(weather_data)
   
    if(weather_data.cod === `404`){
    location_not_found.style.display = 'flex';
    weather.style.display = 'none';
   return;
}
   location_not_found.style.display = "none";
   weather.style.display = "flex";

    cityName.innerHTML = `${weather_data.name}`;      
    temp.innerHTML = `${Math.round(weather_data.main.temp)}°c`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    weatherCondition.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}km/hr`;
  switch(weather_data.weather[0].main){
    case 'Clouds' :
        weather_icon.src = "./images/clouds.png";
        break;
        case 'Clear' :
        weather_icon.src = "./images/clear.png";
        break;
        case 'Rain' :
        weather_icon.src = "./images/rain.png";
        break;
        case 'Drizzle' :
         weather_icon.src = "./images/drizzle.png";
         break;
         case 'Mist' :
        weather_icon.src = "./images/mist.png";
        break;
  }
}
searchBtn.addEventListener('click', ()=> {
    checkWeather(inputBox.value);
});