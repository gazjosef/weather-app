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

import Current from "../Forecast/Current";
import Daily from "../Forecast/Daily";

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

export default function App() {
  // Get Current Forecast
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

  // Get Daily Forecast
  const [fiveHour, setFiveHour] = useState([]);

  useEffect(() => {
    const getWeather = async (e) => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=${API_KEY}&units=metric`
      );
      const data = await api_call.json();

      console.log("Get Weather Data", data);

      setCity(data.name);
      setCountry(data.sys.country);
      setDate(data.dt);
      setDegrees(data.wind.deg);
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

  const timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);

    let hour = a.getHours();
    let min = ("0" + a.getMinutes()).slice(-2);
    // let sec = a.getSeconds();
    let time = hour + ":" + min;

    return time;
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
        <div className="weather-app__title"></div>

        <Current
          city={city}
          country={country}
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

        <Daily
          fiveHour={fiveHour}
          iconConverter={iconConverter}
          timeConverter={timeConverter}
        />
      </div>
    </div>
  );
}
