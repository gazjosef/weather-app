import React from "react";
import "./App.css";
import "./iPhone.css";
import "./weather-background.css";

import SearchField from "./SearchField/SearchField";
// import SecondaryInfo from "./SecondaryInfo/SecondaryInfo";
import MainInfo from "./MainInfo/MainInfo";
import CityDate from "./CityDate/CityDate";
import WeatherIcon from "./WeatherIcon/WeatherIcon";

// OpenWeather API
const API_KEY = "4a64ed09d073cdac231c53e1a3b62181";

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
    fontAwesome: undefined
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
      "10n": "cloud-showers-heavy",
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
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    if (city && country) {
      console.log(data);
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
        description: data.weather[0].description
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
        description: undefined
      });
    }
  };

  backgroundConverter(icon: string) {
    const weatherBackground: any = {
      "01d": "sky-gradient-10",
      "02d": "sky-gradient-11",
      "03d": "sky-gradient-13",
      "04d": "sky-gradient-14",
      "09d": "sky-gradient-14",
      "10d": "sky-gradient-15",
      "11d": "sky-gradient-15",
      "13d": "sky-gradient-09",
      "50d": "sky-gradient-09",
      "01n": "sky-gradient-04",
      "02n": "sky-gradient-03",
      "03n": "sky-gradient-03",
      "04n": "sky-gradient-03",
      "09n": "sky-gradient-03",
      "10n": "sky-gradient-03",
      "11n": "sky-gradient-21",
      "13n": "sky-gradient-02",
      "50n": "sky-gradient-22"
    };
    return weatherBackground[icon];
  }

  render() {
    return (
      <div className="wrapper">
        <div className="center">
          {/* iPhone / iPad */}
          <div className="mobile">
            {/* Screen */}
            <div className="screen sky-gradient-11">
              <SearchField getWeather={this.getWeather} />
              <div className="weather-display">
                <CityDate
                  city={this.state.city}
                  country={this.state.country}
                  date={this.state.date}
                />
                <WeatherIcon
                  icon={this.state.icon}
                  description={this.state.description}
                />
                <MainInfo
                  temperature={this.state.temperature}
                  description={this.state.description}
                />
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
