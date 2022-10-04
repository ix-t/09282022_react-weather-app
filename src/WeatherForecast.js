import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastData from "./WeatherForecastData";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState({ ready: false });

  function handleResponse(response) {
    setForecast({
      ready: true,
      day: response.data.daily[0].dt,
      icon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
      maxTemp: response.data.daily[0].temp.max,
      minTemp: response.data.daily[0].temp.min,
    });
  }

  function search() {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "31ee5db17333dd8cbc0df1677e0dc2c4";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (forecast.ready) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastData data={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
