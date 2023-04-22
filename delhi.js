 fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
          options
  )
  .then((response) => response.json())
  .then((response) => {
      console.log(response);
      cloud_pct_del.innerHTML = response.cloud_pct;
      feels_like_del.innerHTML = response.feels_like;
      humidity_del.innerHTML = response.humidity;
      max_temp_del.innerHTML = response.max_temp;
      min_temp_del.innerHTML = response.min_temp;
      sunset_del.innerHTML = response.sunset;
      sunrise_del.innerHTML = response.sunrise;
      temp_del.innerHTML = response.min_temp;
      wind_degrees_del.innerHTML = response.wind_degrees;
      wind_speed_del.innerHTML = response.wind_speed;
  })
    .catch((err) => console.error(err));

  
 
  
  