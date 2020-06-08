import React from "react";
import "./WeatherIcon.css";

const WeatherIcon = (props: any) => {
  const icon = `../svg/${props.icon}.svg`
  console.log(icon)
  if (props.icon !== undefined) {
    return (
      <div id="weather-icon">
        <img
          // src={require(`${icon}`)}
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
