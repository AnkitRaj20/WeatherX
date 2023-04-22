const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fbc596eac5mshf56672fe122fb27p1193e5jsn1a16d36d8b6d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city.charAt(0).toUpperCase()+ city.slice(1);
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {

      // Create a new Date object using the UTC epoch timestamp
      const sunset_utcDate = new Date(response.sunset * 1000);

      // Convert the UTC date to local date and time
      const localDate = new Date(sunset_utcDate.toLocaleString());
      const hours = localDate.getHours();
      const minutes = localDate.getMinutes();
      const seconds = localDate.getSeconds();

      // Format the time as a string with leading zeros if necessary
      const sunset_time = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      // Create a new Date object using the UTC epoch timestamp
      const sunrise = new Date(response.sunrise * 1000);

      // Convert the UTC date to local date and time
      const localDate2 = new Date(sunrise.toLocaleString());

      // Convert the UTC date to local date and time
      const sunrise_hours = localDate2.getHours();
      const sunrise_minutes = localDate2.getMinutes();
      const sunrise_seconds = localDate2.getSeconds();

      // Format the time as a string with leading zeros if necessary
      const sunrise_time = `${sunrise_hours
        .toString()
        .padStart(2, "0")}:${sunrise_minutes
        .toString()
        .padStart(2, "0")}:${sunrise_seconds.toString().padStart(2, "0")}`;

      if(response.messages){
        error.innerHTML = response.messages
      }else{
        // cloud_pct.innerHTML = response.cloud_pct;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        max_temp.innerHTML = response.max_temp;
        min_temp.innerHTML = response.min_temp;
        sunset.innerHTML = sunset_time;
        abc.innerHTML = sunrise_time;
        temp.innerHTML = response.min_temp;
        temp1.innerHTML = response.min_temp;
        wind_degrees.innerHTML = response.wind_degrees;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed1.innerHTML = response.wind_speed;
      }
    })
    .catch((err) => console.error(err));
};

search.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");
