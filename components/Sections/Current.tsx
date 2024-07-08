import {
  FaWind,
  FaThermometerHalf,
  FaWater,
  FaChartLine,
} from "react-icons/fa";
import Spinner from "../../src/assets/spinner.svg";
import { WeatherData } from "../Layout/WeatherApp.tsx";
import WeatherDetails from "../Snippets/WeatherDetails.tsx";
import Icon from "../Snippets/Icon.tsx";
import Date from "../Snippets/Date.tsx";

interface CurrentProps {
  weatherData: WeatherData | null;
  city: string;
  country: string;
}

export default function Current({ weatherData, city, country }: CurrentProps) {
  if (!weatherData) {
    return (
      <div>
        <img src={Spinner} alt="Loading..." />
        <p>Loading...</p>
      </div>
    );
  }

  // console.log(weatherData);

  const directionConverter = (degrees: number): string => {
    const directions: string[] = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    let direction = (degrees * 8) / 360;
    direction = Math.round(direction);
    direction = (direction + 8) % 8;

    return directions[direction];
  };

  return (
    <div className="current | bg-sky-500 h-[250px] w-full border-solid rounded-[10px] overflow-hidden | text-slate-50">
      <section className="h-[170px] p-[15px] | grid grid-cols-2  items-center gap-1">
        <Icon icon={weatherData.weather[0].icon} />

        <span className=" text-[14px] ">
          {weatherData.weather[0].description}
        </span>

        <span className="text-[40px]">
          {Math.floor(weatherData.main.temp)}
          <sup className="text-[25px]">&#8451;</sup>
        </span>

        <div className="font-semibold	text-[14px] text text-center">
          <h2>
            {city}, <span className="uppercase">{country}</span>
          </h2>
          <h2>
            <Date />
          </h2>
        </div>
      </section>

      <section className="h-[40px] border-t-[1px] border-solid | flex | text-[10px]">
        <WeatherDetails
          title={"Wind"}
          details={directionConverter(weatherData.wind.deg)}
          symbol={"km/h"}
        >
          <FaWind fontSize="1.2rem" />
        </WeatherDetails>

        <WeatherDetails
          title={"Feels Like"}
          details={weatherData.main.feels_like}
          symbol={"%"}
        >
          <FaThermometerHalf fontSize="1.2rem" />
        </WeatherDetails>
      </section>

      <section className="h-[40px] border-t-[1px] border-solid | flex | text-[10px]">
        <WeatherDetails
          title={"Humidity"}
          details={weatherData.main.humidity}
          symbol={"%"}
        >
          <FaWater fontSize="1.2rem" />
        </WeatherDetails>

        <WeatherDetails
          title={"Pressure"}
          details={weatherData.main.pressure}
          symbol={"hPa"}
        >
          <FaChartLine fontSize="1.2rem" />
        </WeatherDetails>
      </section>
    </div>
  );
}
