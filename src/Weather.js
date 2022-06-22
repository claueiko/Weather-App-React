import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather is ${response.data.main.temp}`);
  }
  let city = props.city;
  let apiKey = "7e6ea4ddbec2858b966d408889803cb7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello Claudia Eiko</h2>;
}
