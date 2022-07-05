import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <p>{props.data.dt}</p>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <p>{props.data.temp.max}°C</p>
      <p>{props.data.temp.min}°C</p>
    </div>
  );
}
