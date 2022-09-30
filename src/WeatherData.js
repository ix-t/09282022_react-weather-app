import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
  return (
    <div className="primary-weather">
      <h1>{props.data.city}</h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-4">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="primary-icon img-fluid"
          />
        </div>
        <div className="col-8">
          <h3>
            <span>{Math.round(props.data.temp)}</span>
            <span className="units"> °C </span>
            <span className="units">| °F</span>
          </h3>
          <h4 className="text-capitalize">{props.data.description}</h4>
        </div>
      </div>
      <h5>Humidity: {props.data.humidity}%</h5>
      <h6>Wind: {props.data.wind} m/s</h6>
    </div>
  );
}
