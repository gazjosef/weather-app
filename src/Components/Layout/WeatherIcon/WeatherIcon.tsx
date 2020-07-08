import React from 'react';
import './WeatherIcon.css';

export const WeatherIcon = (props: any) => {
  if (props.icon !== undefined) {
    return (
      <div id="weather-icon">
        <img
          src={require(`../../../Assets/icons/${props.icon}.svg`)}
          alt={props.description}
          className="filter-white"
        />
      </div>
    );
  } else {
    return <div id="weather-icon" />;
  }
};
