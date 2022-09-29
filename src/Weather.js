import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1>Frankfurt am Main</h1>
          <h2>Last updated: Wed 18:00</h2>
          <div className="row">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudy"
                className="primary-icon img-fluid"
              />
            </div>
            <div className="col-6">
              <h3>
                <span>17</span>
                <span className="units"> °C </span>
                <span className="units">| °F</span>
              </h3>
              <h4>Mostly Cloudy</h4>
            </div>
          </div>
          <h5>Humidity: 63%</h5>
          <h6>Wind: 6 km/h</h6>
        </div>
      </div>
    </div>
  );
}
