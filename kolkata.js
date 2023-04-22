const kolTimeout = setTimeout(kol, 8000);

function kol(){

    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata",
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
const sunset_time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;


// Create a new Date object using the UTC epoch timestamp
const sunrise = new Date(response.sunrise * 1000);

// Convert the UTC date to local date and time
const localDate2 = new Date(sunrise.toLocaleString());

// Convert the UTC date to local date and time
const sunrise_hours = localDate2.getHours();
const sunrise_minutes = localDate2.getMinutes();
const sunrise_seconds = localDate2.getSeconds();

// Format the time as a string with leading zeros if necessary
const sunrise_time = `${sunrise_hours.toString().padStart(2, '0')}:${sunrise_minutes.toString().padStart(2, '0')}:${sunrise_seconds.toString().padStart(2, '0')}`
console.log("sunrise_time",sunrise_time)

if(response.messages){
    errorCity.innerHTML = response.messages;
  }else{
cloud_pct_kolkata.innerHTML = response.cloud_pct;
feels_like_kolkata.innerHTML = response.feels_like;
humidity_kolkata.innerHTML = response.humidity;
max_temp_kolkata.innerHTML = response.max_temp;
min_temp_kolkata.innerHTML = response.min_temp;
sunset_kolkata.innerHTML = sunset_time;
sunrise_kolkata.innerHTML = sunrise_time;
temp_kolkata.innerHTML = response.min_temp;
wind_degrees_kolkata.innerHTML = response.wind_degrees;
wind_speed_kolkata.innerHTML = response.wind_speed;
  }
})
.catch((err) => console.error(err));

}