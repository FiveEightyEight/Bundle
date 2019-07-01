import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Weather.css";

const Weather = props => {
  return (
    <div className="col-12 col-lg-8 row">
      {props.weatherInfo.map((e, i) => (
        <WeatherCard weather={e} key={i} />
      ))}
    </div>
  );
};

export default Weather;
