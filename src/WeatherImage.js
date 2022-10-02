import React from "react";
import "./Weather.css";

export default function WeatherImage(props) {
  const codeMapping = {
    "01d": "01d-image.jpg",
    "02d": "02d-image.jpg",
    "03d": "03d-image.jpg",
    "04d": "04d-image.jpg",
    "09d": "09d-image.jpg",
    "10d": "10d-image.jpg",
    "11d": "11d-image.jpg",
    "13d": "13d-image.jpg",
    "50d": "50d-image.jpg",
    "01n": "01n-image.jpg",
    "02n": "02n-image.jpg",
    "03n": "03n-image.jpg",
    "04n": "04n-image.jpg",
    "09n": "09n-image.jpg",
    "10n": "10n-image.jpg",
    "11n": "11n-image.jpg",
    "13n": "13n-image.jpg",
    "50n": "50n-image.jpg",
  };

  console.log(codeMapping[props.data.iconCode]);
  let iconImage = codeMapping[props.data.iconCode];

  return (
    <div
      style={{
        backgroundImage: `url(/img/${iconImage})`,
      }}
      className="background-image"
    ></div>
  );
}
