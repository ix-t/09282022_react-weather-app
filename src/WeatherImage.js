import React from "react";
//import Background from `./img/03n-image.jpg`;

export default function WeatherImage(props) {
  const codeMapping = {
    "01d": "01d-01n-clear-sky.jpg",
    "02d": "02d-02n-few-clouds.jpg",
    "03d": "03d-03n-scattered-clouds.jpg",
    "04d": "04d-04n-broken-clouds.jpg",
    "09d": "09d-09n-shower-rain.jpg",
    "10d": "10d-10n-rain.jpg",
    "11d": "11d-11n-thunderstorm.jpg",
    "13d": "13d-13n-snow.jpg",
    "50d": "50d-50n-mist.jpg",
    "01n": "01d-01n-clear-sky.jpg",
    "02n": "02d-02n-few-clouds.jpg",
    "03n": "03d-03n-scattered-clouds.jpg",
    "04n": "04d-04n-broken-clouds.jpg",
    "09n": "09d-09n-shower-rain.jpg",
    "10n": "10d-10n-rain.jpg",
    "11n": "11d-11n-thunderstorm.jpg",
    "13n": "13d-13n-snow.jpg",
    "50n": "50d-50n-mist.jpg",
  };

  console.log(props.data.iconCode);
  let iconCode = codeMapping[props.data.iconCode];

  return (
    <div
      style={{
        backgroundImage: `url(./img/${iconCode}-image.jpg)`,
      }}
      className="background-image"
    ></div>
  );
}
