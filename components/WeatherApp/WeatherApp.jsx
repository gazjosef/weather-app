import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
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
  const [city, setCity] = useState("sydney");
  const [country, setCountry] = useState("au");
  const [time, setTime] = useState(new Date());

  // const [data, setData] = useState({});
  const [data, setData] = useState({
    base: "stations",
    clouds: {
      all: null,
    },
    cod: null,
    coord: {
      lon: null,
      lat: null,
    },
    dt: null,
    id: null,
    main: {
      feels_like: null,
      humidity: null,
      pressure: null,
      temp: null,
      temp_min: null,
      temp_max: null,
    },
    name: null,
    rain: {
      // 1h: 0.22
    },
    sys: {
      type: null,
      id: null,
      country: null,
      sunrise: null,
      sunset: null,
    },
    timezone: null,
    visibility: null,
    weather: [
      {
        description: null,
        icon: null,
        id: null,
        main: null,
      },
    ],
    wind: {
      speed: null,
      deg: null,
      gust: null,
    },
  });

  // Get Daily Forecast
  const [fiveHour, setFiveHour] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const setWeather = async (e) => {
      // e.preventDefault();
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      const data = await api_call.json();

      setData(data);
      setCity(data.name);
      setCountry(data.sys.country);

      console.log("Get Weather Data", data);
      console.log("Get Time", time);
    };
    setWeather();
  }, []);

  useEffect(() => {
    const setHourForecast = async (e) => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=${API_KEY}`
      );
      const fiveHourData = await api_call.json();
      console.log("Get Hour Data", fiveHourData.list.slice(0, 5));

      setFiveHour(fiveHourData.list.slice(0, 5));
    };
    setHourForecast();
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

  // const timeConverter = (UNIX_timestamp) => {
  //   let a = new Date(UNIX_timestamp * 1000);

  //   let hour = a.getHours();
  //   let min = ("0" + a.getMinutes()).slice(-2);
  //   // let sec = a.getSeconds();
  //   let time = hour + ":" + min;

  //   return time;
  // };

  const getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    console.log("Get Weather Data", data);
    console.log("clicked");

    setData(data);

    setCity(data.name);
    setCountry(data.sys.country);

    const api_call2 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`
    );
    const fiveHourData = await api_call2.json();
    console.log("Get Hour Data", fiveHourData.list.slice(0, 5));

    setFiveHour(fiveHourData.list.slice(0, 5));
  };

  const options = { month: "long", day: "numeric" };

  return (
    <div className="screen">
      <div className="weather-app">
        <form onSubmit={getWeather} className="weather-app__title">
          <input type="text" name="city" placeholder="E.g Sydney.." />
          <input type="text" name="country" placeholder="E.g AU.." />
          <button type="submit">
            <IconContext.Provider value={{ className: "search-icon" }}>
              <FaSearch />
            </IconContext.Provider>
          </button>
        </form>

        <Current
          icon={iconConverter(data.weather[0].icon)}
          city={city}
          country={country}
          time={time.toLocaleTimeString()}
          date2={time.toLocaleDateString(undefined, options)}
          temperature={Math.floor(data.main.temp)}
          description={data.weather[0].description}
          degrees={data.wind.deg}
          wind={data.wind.speed}
          feelslike={data.main.feels_like}
          humidity={data.main.humidity}
          pressure={data.main.pressure}
        />

        <Daily
          fiveHour={fiveHour}
          iconConverter={iconConverter}
          // time={time.toLocaleTimeString()}
          // timeConverter={timeConverter}
        />
      </div>
    </div>
  );
}
