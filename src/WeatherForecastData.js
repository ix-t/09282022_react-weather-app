import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastData(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function icon() {
    let icon = props.data.weather[0].icon;
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="weatherForecastDay">{day()}</div>
      <img
        src={icon()}
        alt={props.data.weather[0].description}
        className="weatherForecastIcon img-fluid"
      />
      <div className="weatherForecastMaxTemp">{maxTemp()}</div>
      <div className="weatherForecastMinTemp">{minTemp()}</div>
    </div>
  );
}
