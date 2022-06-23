import React, { useState } from "react";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function App() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: "Thursday 8-98",
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div className="App">
        <div className="container main">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a city"
                />{" "}
                <div className="row d-flex justify-content-center">
                  <div className="col text-center">
                    <button type="submit " className="btn btn-primary m-2 ">
                      Search
                    </button>
                    <button type="submit" className="btn btn-warning m-2">
                      Current
                    </button>
                  </div>
                </div>
              </form>

              <h1>London</h1>
              <p className="current-date text-center">{weatherData.date}</p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-3">
            <div className="col text-center">
              <h2>{Math.round(weatherData.temperature)}°C</h2>
              <p className="units"> °C | °F</p>
            </div>
            <div className="col ">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="orange"
                size={71}
                animate={true}
              />
            </div>
          </div>
          <div classname="container details">
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
          <div classname="container">
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
    const apiKey = "7e6ea4ddbec2858b966d408889803cb7";
    let city = "London";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
