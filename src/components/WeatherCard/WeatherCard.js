import React from "react";
import moment from "moment";

import "./WeatherCard.css";

const WeatherCard = props => {
  const { weather } = props;

  return (
    <div className="global-card ml-2 weather-card">
      <div className="card-body">
        <h6 className="card-title weather-card-title-text">
          {moment
            .unix(weather.time)
            .format("llll")
            .slice(0, 3)}
        </h6>
        <img
          src={require(`../../assets/images/weather-icons/${weather.icon.replace(
            "/-+",
            "_"
          )}.svg`)}
          alt=""
          className="weather-icon"
        />
        <div className="weather-card-temp-container justify-content-around">
          <div className="px-2">
            <p className="weather-card-label-text font-weight-bold">High</p>
            <p className="card-text weather-card-weather-text">
              {Math.trunc(weather.temperatureHigh)}&#176; F
            </p>
          </div>
          <div className="px-2">
            <p className="weather-card-label-text font-weight-bold">Low</p>
            <p className="card-text weather-card-weather-text">
              {Math.trunc(weather.temperatureLow)}&#176; F
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
