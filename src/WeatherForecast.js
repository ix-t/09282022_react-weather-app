import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiKey = "31ee5db17333dd8cbc0df1677e0dc2c4";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecastDay">Tue</div>
          <img
            src="/"
            alt="pending"
            className="weatherForecastIcon img-fluid"
          />
          <div className="weatherForecastMaxTemp">19°</div>
          <div className="weatherForecastMinTemp">10°</div>
        </div>
      </div>
    </div>
  );
}
