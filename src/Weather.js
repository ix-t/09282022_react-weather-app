import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "31ee5db17333dd8cbc0df1677e0dc2c4";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-wrapper">
        <div className="weather">
          <form onSubmit={handleSubmit}>
            <div className="row g-1 justify-content-center">
              <div className="col-md-7 col-sm-7">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control form-control-sm"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-md-auto col-sm-auto">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary btn-sm"
                />{" "}
                <input
                  type="button"
                  value="Current"
                  className="btn btn-secondary btn-sm"
                />
              </div>
            </div>
          </form>
          <WeatherData data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
