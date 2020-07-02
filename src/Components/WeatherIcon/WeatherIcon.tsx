import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = (props: any) => {
  if (props.icon !== undefined) {
    return (
      <div id="weather-icon">
        <img
          // src={require(`./icons/${props.icon}.svg`)}
          src={require(`../../Assets/icons/${props.icon}.svg`)}
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
