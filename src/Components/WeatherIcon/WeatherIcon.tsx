import React from "react";
import "./WeatherIcon.css";

const WeatherIcon = (props: any) => {
  console.log(props.icon)
  if (props.icon !== undefined) {
    return (
      <div id="weather-icon">
        <img
          // src={`../svg/${props.icon}.svg`}
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
