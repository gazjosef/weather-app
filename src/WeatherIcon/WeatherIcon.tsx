import React from "react";
import "./WeatherIcon.css";
import "../svg/sun-solid.svg";

const WeatherIcon = (props: any) => {
  if (props.icon !== undefined) {
    return (
      <div id="weather-icon">
        <img
          src={require(`../svg/${props.icon}.svg`)}
          alt={props.description}
          className="filter-white"
        />
      </div>
    );
  } else {
    return <div id="weather-icon" />;
  }
};

export default WeatherIcon;
