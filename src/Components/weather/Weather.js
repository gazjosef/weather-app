import React, { useState, useEffect } from "react";

import MainWindow from "../layout/MainWindow";
import Forecast from "../layout/Forecast";

const API_KEY = "4a64ed09d073cdac231c53e1a3b62181";

export default function Weather() {
  // Get Weather State
  const [background, setBackground] = useState("sky-gradient-11");
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [description, setDescription] = useState();
  const [feelslike, setFeelslike] = useState();
  const [humidity, setHumidity] = useState();
  const [icon, setIcon] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [temp_min, setTemp_min] = useState();
  const [temp_max, setTemp_max] = useState();
  const [temperature, setTemperature] = useState(0);
  const [time, setTime] = useState();
  const [wind, setWind] = useState();
  const [windDegrees, setWindDegrees] = useState();

  useEffect(() => {
    const getWeather = async (e) => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=${API_KEY}&units=metric`
      );

      const data = await api_call.json();

      console.table(data);

      setBackground(backgroundConverter(data.weather[0].icon));
      setCity(data.name);
      setCountry(data.sys.country);
      setDescription(data.weather[0].description);
      setFeelslike(data.main.feels_like);
      setHumidity(data.main.humidity);
      setIcon(iconConverter(data.weather[0].icon));
      setLatitude(data.coord.lat);
      setLongitude(data.coord.lon);
      setSunrise(timeConverter(data.sys.sunrise));
      setSunset(timeConverter(data.sys.sunset));
      setTemp_min(data.main.temp_min);
      setTemp_max(data.main.temp_max);
      setTemperature(Math.floor(data.main.temp));
      setTime(timeConverter(data.dt));
      setWind(data.wind.speed);
      setWindDegrees(data.wind.deg);
    };
    getWeather();
  }, []);

  const backgroundConverter = (icon) => {
    const weatherBackground = {
      "01d": "sky-gradient-11",
      "02d": "sky-gradient-09",
      "03d": "sky-gradient-13",
      "04d": "sky-gradient-14",
      "09d": "sky-gradient-14",
      "10d": "sky-gradient-15",
      "11d": "sky-gradient-15",
      "13d": "sky-gradient-09",
      "50d": "sky-gradient-08",
      "01n": "sky-gradient-05",
      "02n": "sky-gradient-21",
      "03n": "sky-gradient-03",
      "04n": "sky-gradient-03",
      "09n": "sky-gradient-22",
      "10n": "sky-gradient-03",
      "11n": "sky-gradient-21",
      "13n": "sky-gradient-02",
      "50n": "sky-gradient-20",
    };

    return weatherBackground[icon];
  };

  const iconConverter = (icon) => {
    const convertIcon = {
      "01d": "sun-solid",
      "02d": "cloud-sun-solid",
      "03d": "cloud-solid",
      "04d": "cloud-solid",
      "09d": "cloud-sun-rain-solid",
      "10d": "cloud-showers-heavy-solid",
      "11d": "poo-storm-solid",
      "13d": "snowflake-solid",
      "50d": "smog-solid",
      "01n": "moon-solid",
      "02n": "cloud-moon-solid",
      "03n": "cloud-solid",
      "04n": "cloud-solid",
      "09n": "cloud-moon-rain-solid",
      "10n": "cloud-showers-heavy-solid",
      "11n": "poo-storm-solid",
      "13n": "snowflake-solid",
      "50n": "smog-solid",
    };
    return convertIcon[icon];
  };

  const timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let day = a.getDate();
    let hour = a.getHours();
    let min = ("0" + a.getMinutes()).slice(-2);
    // let sec = a.getSeconds();
    let time = day + " " + month + " " + year + " " + hour + ":" + min;

    return time;
  };

  useEffect(() => {
    const getFiveDay = async (e) => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=${API_KEY}`
      );

      const fiveDayData = await api_call.json();

      console.log(fiveDayData);
    };
    getFiveDay();
  }, []);

  return (
    <div className="screen">
      <div className="weather-app">
        <div className="weather-app__title">
          <h1>
            {city}, {country}
          </h1>
        </div>

        <MainWindow
          icon={icon}
          description={description}
          temperature={temperature}
        />

        <Forecast />
      </div>
    </div>
  );
}
