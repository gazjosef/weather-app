import React, { useState, useEffect } from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDaySunnyOvercast,
  WiNightPartlyCloudy,
  WiCloud,
  WiDayCloudy,
  WiNightCloudy,
  WiRain,
  WiDayShowers,
  WiNightShowers,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

import MainWindow from "./Windows/MainWindow";
import Forecast from "./Windows/Forecast";

const API_KEY = "4a64ed09d073cdac231c53e1a3b62181";

export default function App() {
  // Get Weather State
  const [background, setBackground] = useState("sky-gradient-11");
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [feelslike, setFeelslike] = useState();
  const [icon, setIcon] = useState();
  const [temperature, setTemperature] = useState(0);
  const [time, setTime] = useState();

  const [degrees, setDegrees] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [wind, setWind] = useState();

  // Get Five Hour Forecast
  const [fiveHour, setFiveHour] = useState([]);

  useEffect(() => {
    const getWeather = async (e) => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=${API_KEY}&units=metric`
      );

      const data = await api_call.json();

      console.log("Get Weather Data", data);

      setBackground(backgroundConverter(data.weather[0].icon));
      setCity(data.name);
      setCountry(data.sys.country);
      setDate(dateConverter(data.dt));
      setDegrees(directionConverter(data.wind.deg));
      setDescription(data.weather[0].description);
      setFeelslike(data.main.feels_like);
      setHumidity(data.main.humidity);
      setIcon(iconConverter(data.weather[0].icon));
      setPressure(data.main.pressure);
      setTemperature(Math.floor(data.main.temp));
      setTime(timeConverter(data.dt));
      setWind(data.wind.speed);
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
      "01d": <WiDaySunny />,
      "02d": <WiDaySunnyOvercast />,
      "03d": <WiCloud />,
      "04d": <WiDayCloudy />,
      "09d": <WiRain />,
      "10d": <WiDayShowers />,
      "11d": <WiThunderstorm />,
      "13d": <WiSnow />,
      "50d": <WiFog />,
      "01n": <WiNightClear />,
      "02n": <WiNightPartlyCloudy />,
      "03n": <WiCloud />,
      "04n": <WiNightCloudy />,
      "09n": <WiRain />,
      "10n": <WiNightShowers />,
      "11n": <WiThunderstorm />,
      "13n": <WiSnow />,
      "50n": <WiFog />,
    };
    return convertIcon[icon];
  };

  const dateConverter = (UNIX_timestamp) => {
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
    let date = day + " " + month + " " + year;

    return date;
  };

  const timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);

    let hour = a.getHours();
    let min = ("0" + a.getMinutes()).slice(-2);
    // let sec = a.getSeconds();
    let time = hour + ":" + min;

    return time;
  };

  const directionConverter = (degrees) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    let direction = (degrees * 8) / 360;

    direction = Math.round(direction, 0);

    direction = (direction + 8) % 8;

    return directions[direction];
  };

  useEffect(() => {
    const getHourForecast = async (e) => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=${API_KEY}`
      );

      const fiveHourData = await api_call.json();

      console.log("Get Hour Data", fiveHourData.list.slice(0, 5));

      setFiveHour(fiveHourData.list.slice(0, 5));
    };
    getHourForecast();
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
          date={date}
          degrees={degrees}
          temperature={temperature}
          wind={wind}
          feelslike={feelslike}
          humidity={humidity}
          pressure={pressure}
        />

        <Forecast
          fiveHour={fiveHour}
          iconConverter={iconConverter}
          timeConverter={timeConverter}
        />
      </div>
    </div>
  );
}
