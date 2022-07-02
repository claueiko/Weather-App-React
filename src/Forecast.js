import React from "react";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";

export default function Forecast() {
  return (
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
  );
}
