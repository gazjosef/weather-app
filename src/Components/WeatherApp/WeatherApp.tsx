/* eslint-disable */

import React, { useState } from 'react'

// LAYOUT
import { SearchField } from '../Layout/SearchField/SearchField'
import { CityDate } from '../Layout/CityDate/CityDate'
import { WeatherIcon } from '../Layout/WeatherIcon/WeatherIcon'
import { MainInfo } from '../Layout/MainInfo/MainInfo'

const API_KEY = "4a64ed09d073cdac231c53e1a3b62181"

export const WeatherApp = () => {
    const [background, setBackground] = useState('sky-gradient-11') 
    const [city, setCity] = useState()
    const [country, setCountry] = useState()
    const [date, setDate] = useState()
    const [description, setDescription] = useState()
    const [feelslike, setFeelslike] = useState()
    const [humidity, setHumidity] = useState()
    const [icon, setIcon] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [sunrise, setSunrise] = useState()
    const [sunset, setSunset] = useState()
    const [temp_min, setTemp_min] = useState()
    const [temp_max, setTemp_max] = useState()
    const [temperature, setTemperature] = useState(0)
    const [time, setTime] = useState()
    const [wind, setWind] = useState()
    const [windDegrees, setWindDegrees] = useState()

    const timeConverter = (UNIX_timestamp: any) => {
        let a = new Date(UNIX_timestamp * 1000);
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        // let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
        return time;
    }

    const iconConverter = (icon: string) => {
        const convertIcon: any = {
          '01d': 'sun-solid',
          '02d': 'cloud-sun-solid',
          '03d': 'cloud-solid',
          '04d': 'cloud-solid',
          '09d': 'cloud-sun-rain-solid',
          '10d': 'cloud-showers-heavy-solid',
          '11d': 'poo-storm-solid',
          '13d': 'snowflake-solid',
          '50d': 'smog-solid',
          '01n': 'moon-solid',
          '02n': 'cloud-moon-solid',
          '03n': 'cloud-solid',
          '04n': 'cloud-solid',
          '09n': 'cloud-moon-rain-solid',
          '10n': 'cloud-showers-heavy-solid',
          '11n': 'poo-storm-solid',
          '13n': 'snowflake-solid',
          '50n': 'smog-solid',
        };
        return convertIcon[icon];
    }

    const backgroundConverter = (icon: string) => {
        const weatherBackground: any = {
            '01d': 'sky-gradient-11',
            '02d': 'sky-gradient-09',
            '03d': 'sky-gradient-13',
            '04d': 'sky-gradient-14',
            '09d': 'sky-gradient-14',
            '10d': 'sky-gradient-15',
            '11d': 'sky-gradient-15',
            '13d': 'sky-gradient-09',
            '50d': 'sky-gradient-08',
            '01n': 'sky-gradient-05',
            '02n': 'sky-gradient-21',
            '03n': 'sky-gradient-03',
            '04n': 'sky-gradient-03',
            '09n': 'sky-gradient-22',
            '10n': 'sky-gradient-03',
            '11n': 'sky-gradient-21',
            '13n': 'sky-gradient-02',
            '50n': 'sky-gradient-20',
        };

        return weatherBackground[icon];
    }

    const getWeather = async (e: any) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        
        const api_call = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
        );
            
        const data = await api_call.json();
            
        console.log(data);
        
        if (city && country) {
            setBackground(data.weather[0].icon)
            setCity(data.name)
            setCountry(data.sys.country)
            setDate(data.dt),
            setDescription(data.weather[0].description)
            setFeelslike(data.main.feels_like)
            setHumidity(data.main.humidity)
            // setIcon(data.weather[0].icon)
            setLatitude(data.coord.lat)
            setLongitude(data.coord.lon)
            setSunrise(data.sys.sunrise)
            setSunset(data.sys.sunset)
            setTemp_min(data.main.temp_min)
            setTemp_max(data.main.temp_max)
            setTemperature(data.main.temp)
            setWind(data.wind.speed)
            setWindDegrees(data.wind.deg)

            const zone = await getTimeZone();
            // setTime(zone.formatted)

          } else {
            // setCity("")
            // setCountry(undefined)
            // // setDate( timeConverter(undefined)
            // // setIcon( iconConverter()
            // setHumidity(undefined)
            // setWind(undefined)
            // setTemp_min(undefined)
            // setTemp_max(undefined)
            // setDescription(undefined)
            // // setBackground( backgroundConverter()
            // setLatitude(undefined)
            // setLongitude(undefined)
        };

        console.log("Background is: ", background);
        console.log("City is: ", city);
        console.log("Country is: ", country);
        console.log("Date is: ", date);
        console.log("Description is: ", description);
        console.log("Feelslike is: ", feelslike);
        console.log("Humidity is: ", humidity);
        console.log("Icon is: ", icon);
        console.log("Latitude is: ", latitude);
        console.log("Longitude is: ", longitude);
        console.log("Sunrise is: ", sunrise);
        console.log("Sunset is: ", sunset);
        console.log("Temp_min is: ", temp_min);
        console.log("Temp_max is: ", temp_max);
        console.log("Temperature is: ", temperature);
        console.log("Time is: ", time);
        console.log("Wind is: ", wind);
        console.log("Wind Degrees is: ", windDegrees);
    }
        
    const getTimeZone = async () => {
        //   const { latitude, longitude } = this.state;
        const lat = latitude;
        const long = longitude;
        
        const timezone_api_call = await fetch(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=${lat}&lng=${long}`
        );
        const zone = await timezone_api_call.json();
        
        return zone;
    };
    
    return (
        <div className={`screen ${background}`}>
            <SearchField getWeather={getWeather}/>
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
            {/* <h1>Weather APP</h1>
            <p>The Temp is: {temperature}</p>
            <p>The City is: {city}</p>
            <button onClick={() => setTemperature(temperature + 1)}>
                Click me for Temp
            </button>
            <button onClick={() => setCity("Sydney")}>
                Click me for City
            </button> */}
        </div>
    )
}
