import React, { useState } from "react";
import DateNow from "./DateNow";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function App(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });

    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "7e6ea4ddbec2858b966d408889803cb7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="container main">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a city"
                  onChange={handleCityChange}
                />{" "}
                <div className="row d-flex justify-content-center">
                  <div className="col text-center">
                    <button type="submit " className="btn btn-primary m-2 ">
                      Search oioi
                    </button>
                    <button type="submit" className="btn btn-warning m-2">
                      Current
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <h1 className="text-capitalize">{weatherData.city}</h1>
                <p className="current-date text-center">
                  <DateNow date={weatherData.date} />
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-3">
            <div className="col text-center">
              <h2>{Math.round(weatherData.temperature)}°C</h2>
              <p className="units"> °C | °F</p>
            </div>
            <div className="col ">
              <WeatherIcon code={weatherData.icon} />
            </div>
          </div>
          <div className="container details">
            <div className="row">
              <div className="col text-center">
                <p className="text-capitalize">{weatherData.description}</p>
              </div>
              <div className="col text-center">
                <p>Humidity: {weatherData.humidity}% </p>
              </div>
              <div className="col text-center">
                <p>Wind: {weatherData.wind}km/h </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row forecast">
              <div className="col text-center">
                <p>Thu</p>
                <ReactAnimatedWeather
                  icon="RAIN"
                  color="blue"
                  size={51}
                  animate={true}
                />
                <p>11°C</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
