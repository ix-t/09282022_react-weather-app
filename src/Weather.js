import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Wed 11:00",
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-wrapper">
        <div className="weather">
          <form>
            <div className="row g-1 justify-content-center">
              <div className="col-md-7 col-sm-7">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control form-control-sm"
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
          <div className="primary-weather">
            <h1>{weatherData.city}</h1>
            <h2>Last updated: {weatherData.date}</h2>
            <div className="row">
              <div className="col-6">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="primary-icon img-fluid"
                />
              </div>
              <div className="col-6">
                <h3>
                  <span>{Math.round(weatherData.temp)}</span>
                  <span className="units"> °C </span>
                  <span className="units">| °F</span>
                </h3>
                <h4 className="text-capitalize">{weatherData.description}</h4>
              </div>
            </div>
            <h5>Humidity: {weatherData.humidity}%</h5>
            <h6>Wind: {weatherData.wind} m/s</h6>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "31ee5db17333dd8cbc0df1677e0dc2c4";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
