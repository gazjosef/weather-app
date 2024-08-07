import { useState, useEffect } from "react";
import axios from "axios";
import Current from "../Sections/Current";
import Upcoming from "../Sections/Upcoming";
import SearchBar from "../Sections/SearchBar";

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
  rain: {
    [key: string]: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [upcomingData, setUpcomingData] = useState<WeatherData[] | null>(null);
  const [city, setCity] = useState<string>("Sydney");
  const [country, setCountry] = useState<string>("au");
  const API_KEY: string = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  useEffect(() => {
    async function fetchWeather(): Promise<void> {
      try {
        const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeather();
  }, [city, country, API_KEY]);

  useEffect(() => {
    async function fetchUpcomingWeather(): Promise<void> {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=${API_KEY}`
        );
        const responseArr = response.data.list;

        if (Array.isArray(responseArr)) {
          setUpcomingData(responseArr.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching upcoming weather data:", error);
      }
    }

    fetchUpcomingWeather();
  }, [API_KEY]);

  return (
    <div className="bg-slate-50 h-full py-[20px] px-[10px] | flex flex-col items-center justify-between">
      <SearchBar setCity={setCity} setCountry={setCountry} />

      <Current weatherData={weatherData} city={city} country={country} />

      <Upcoming upcomingData={upcomingData} />
    </div>
  );
}
