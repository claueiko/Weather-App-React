import axios from "axios";
import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";
import WeatherForecastDay from "./WeatherForecastDay";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="row forecast">
          <div className="col text-center">
            <WeatherForecastDay data={forecast[0]} />
            <p>{forecast[0].dt}</p>
            <WeatherIcon code={forecast[0].weather[0].icon} size={36} />

            <p>{forecast[0].temp.max}°C</p>
            <p>{forecast[0].temp.min}°C</p>
          </div>
          <div className="col text-center">
            <p>Fri</p>
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="gray"
              size={51}
              animate={true}
            />
            <p>14°C</p>
            <p>11°C</p>
          </div>
          <div className="col text-center">
            <p>Sat</p>
            <ReactAnimatedWeather
              icon="WIND"
              color="gray"
              size={51}
              animate={true}
            />
            <p>17C°</p>
            <p>11°C</p>
          </div>
          <div className="col text-center">
            <p>Sun</p>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="orange"
              size={51}
              animate={true}
            />
            <p>19°C</p>
            <p>11°C</p>
          </div>
          <div className="col text-center">
            <p>Mon</p>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="orange"
              size={51}
              animate={true}
            />
            <p>21°C</p>
            <p>11°C</p>
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiKey = "d94e59d63240dae37b83f62bc6afbd84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
