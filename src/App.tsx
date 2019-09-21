import React from "react";
import "./App.css";
import "./iPhone.css";
import "./weather-background.css";

import SearchField from "./SearchField/SearchField";
// import SecondaryInfo from "./SecondaryInfo/SecondaryInfo";
import MainInfo from "./MainInfo/MainInfo";
import CityDate from "./CityDate/CityDate";
import WeatherIcon from "./WeatherIcon/WeatherIcon";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    date: undefined,
    icon: undefined,
    humidity: undefined,
    wind: undefined,
    temp_min: undefined,
    temp_max: undefined,
    description: undefined,
    error: undefined,
    background: "sky-gradient-11",
    latitude: undefined,
    longitude: undefined,
    time: undefined
  };

  timeConverter(UNIX_timestamp: number) {
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
      "Dec"
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    // let sec = a.getSeconds();
    let time = date + " " + month + " " + year + " " + hour + ":" + min;
    return time;
  }

  iconConverter(icon: string) {
    const convertIcon: any = {
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
      "50n": "smog-solid"
    };
    return convertIcon[icon];
  }

  getWeather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
    );
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        date: this.timeConverter(data.dt),
        icon: this.iconConverter(data.weather[0].icon),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        description: data.weather[0].description,
        background: this.backgroundConverter(data.weather[0].icon),
        latitude: data.coord.lat,
        longitude: data.coord.lon
      });
      const zone = await this.getTimeZone();
      this.setState({
        time: zone.formatted
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        date: undefined,
        icon: undefined,
        humidity: undefined,
        wind: undefined,
        temp_min: undefined,
        temp_max: undefined,
        description: undefined,
        background: undefined,
        latitude: undefined,
        longitude: undefined
      });
    }
  };

  getTimeZone = async () => {
    const { latitude, longitude } = this.state;
    const lat = latitude;
    const long = longitude;

    const timezone_api_call = await fetch(
      `https://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.REACT_APP_TIMEZONEDB_API_KEY}&format=json&by=position&lat=${lat}&lng=${long}`
    );
    const zone = await timezone_api_call.json();

    return zone;
  };

  backgroundConverter(icon: string) {
    const weatherBackground: any = {
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
      "50n": "sky-gradient-20"
    };
    return weatherBackground[icon];
  }

  render() {
    const {
      background,
      city,
      country,
      // date,
      description,
      icon,
      temperature,
      time
    } = this.state;
    return (
      <div className="wrapper">
        <div className="center">
          {/* iPhone / iPad */}
          <div className="mobile">
            {/* Screen */}
            <div className={`screen ${background}`}>
              <SearchField getWeather={this.getWeather} />
              <div className="weather-display">
                <CityDate
                  city={city}
                  country={country}
                  // date={date}
                  time={time}
                />
                <WeatherIcon icon={icon} description={description} />
                <MainInfo temperature={temperature} description={description} />
              </div>
            </div>
            {/* Home Button */}
            <div className="home"></div>
            <div className="inner"></div>
            {/* Volume */}
            <ul className="volume">
              <li></li>
              <li></li>
            </ul>
            <ul className="silent">
              <li></li>
            </ul>
            <ul className="sleep">
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;