import React from "react";
import "./SecondaryInfo.css";

const SecondaryInfo = (props: any) => (
  <div id="secondary-info">
    <div className="text-left px-3">
      {props.temp_min && (
        <p className="weather-key">
          Min:{" "}
          <span className="weather-value">
            {props.temp_min}
            <sup>&deg;</sup>
            <span className="unit">C</span>
          </span>
        </p>
      )}
      {props.temp_max && (
        <p className="weather-key">
          Max:{" "}
          <span className="weather-value">
            {props.temp_max}
            <sup>&deg;</sup>
            <span className="unit">C</span>
          </span>
        </p>
      )}
      {props.humidity && (
        <p className="weather-key">
          Humidity: <span className="weather-value">{props.humidity}</span>
        </p>
      )}
      {props.wind && (
        <p className="weather-key">
          Wind: <span className="weather-value">{props.wind} KM</span>
        </p>
      )}
    </div>
  </div>
);

export default SecondaryInfo;
