import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahr(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2 className="temperature">{Math.round(props.celsius)}°C</h2>
        <p className="unit">
          {" "}
          °C |{" "}
          <a href="/" onClick={convertToFahr}>
            °F
          </a>
        </p>
      </div>
    );
  } else {
    let fahr = (props.celsius * 9) / 5 + 32;

    return (
      <div className="WeatherTemperature">
        <h2 className="temperature">{Math.round(fahr)}°F</h2>
        <p className="unit">
          {" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </p>
      </div>
    );
  }
}
