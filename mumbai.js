const mumTimeout = setTimeout(mum, 6000);

function mum() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
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
      console.log("sunrise_time", sunrise_time);

      if(response.messages){
        errorCity.innerHTML = response.messages;
      }else{
      cloud_pct_mumbai.innerHTML = response.cloud_pct;
      feels_like_mumbai.innerHTML = response.feels_like;
      humidity_mumbai.innerHTML = response.humidity;
      max_temp_mumbai.innerHTML = response.max_temp;
      min_temp_mumbai.innerHTML = response.min_temp;
      sunset_mumbai.innerHTML = sunset_time;
      sunrise_mumbai.innerHTML = sunrise_time;
      temp_mumbai.innerHTML = response.min_temp;
      wind_degrees_mumbai.innerHTML = response.wind_degrees;
      wind_speed_mumbai.innerHTML = response.wind_speed;
      }
    })
    .catch((err) => console.error(err));
}
