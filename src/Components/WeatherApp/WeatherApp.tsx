import React, { useState } from 'react'

// LAYOUT
import { SearchField } from '../Layout/SearchField/SearchField'
import { CityDate } from '../Layout/CityDate/CityDate'
import { WeatherIcon } from '../Layout/WeatherIcon/WeatherIcon'
import { MainInfo } from '../Layout/MainInfo/MainInfo'

export const WeatherApp = () => {
    const [temperature, setTemperature] = useState(undefined)
    const [city, setCity] = useState(undefined)
    const [date, setDate] = useState(undefined)
    const [icon, setIcon] = useState(undefined)
    const [country, setCountry] = useState(undefined)
    const [humidity, sethumidity] = useState(undefined)
    const [wind, setWind] = useState(undefined)
    const [temp_min, setTemp_min] = useState(undefined)
    const [temp_max, setTemp_max] = useState(undefined)
    const [description, setDescription] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [background, setBackground] = useState('sky-gradient-11') 
    const [latitude, setLatitude] = useState(undefined)
    const [longitude, setLongitude] = useState(undefined)
    const [time, setTime] = useState(undefined)

    return (
        <div className={`screen ${background}`}>
            <SearchField />
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
            <h1>Weather APP</h1>
            <p>The Temp is: {temperature}</p>
        </div>
    )
}
