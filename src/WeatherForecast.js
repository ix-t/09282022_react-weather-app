import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastData from "./WeatherForecastData";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);
  }

  function search() {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "31ee5db17333dd8cbc0df1677e0dc2c4";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastData data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
