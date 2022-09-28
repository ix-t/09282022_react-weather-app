import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Belfast</h1>
      <h2>Last updated: Wed 18:00</h2>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
        </div>
        <div className="col-6">
          <h3>
            <span>17</span>
            <span> °C</span>
          </h3>
          <h4>Mostly Cloudy</h4>
        </div>
      </div>
      <h5>Humidity: 63%</h5>
      <h6>Wind: 6 km/h</h6>
    </div>
  );
}
