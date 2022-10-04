import React from "react";

export default function WeatherForecastData(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.maxTemp);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.minTemp);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.day * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weatherForecastDay">{day()}</div>
      <img
        src={props.data.icon}
        alt=""
        className="weatherForecastIcon img-fluid"
      />
      <div className="weatherForecastMaxTemp">{maxTemp()}</div>
      <div className="weatherForecastMinTemp">{minTemp()}</div>
    </div>
  );
}
