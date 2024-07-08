// ** Import Icons
import { IconContext } from "react-icons";
import {
  FaWind,
  FaThermometerHalf,
  FaWater,
  FaChartLine,
} from "react-icons/fa";
import Spinner from "../../src/assets/spinner.svg";

// ** Import Shared Components
import { WeatherData } from "../Layout/WeatherApp.tsx";
import { iconConverter } from "../Snippets/iconConverter.tsx";

interface CurrentProps {
  weatherData: WeatherData | null;
  city: string;
  country: string;
}

const Current: React.FC<CurrentProps> = ({ weatherData, city, country }) => {
  if (!weatherData) {
    return (
      <div>
        <img src={Spinner} alt="Loading..." />
        <p>Loading...</p>
      </div>
    );
  }

  const currentTime = Date.now();
  const currentDate = new Date(currentTime ?? 0);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

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
        <div className="h-[70px] relative">
          <IconContext.Provider
            value={{
              className:
                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold	text-[80px] text-white",
            }}
          >
            {iconConverter(weatherData.weather[0].icon)}
          </IconContext.Provider>
        </div>

        <span>
          <h2 className=" text-[14px] ">
            {weatherData.weather[0].description}
          </h2>
        </span>

        <span className="text-[40px]">
          {Math.floor(weatherData.main.temp)}
          <sup className="text-[25px]">&#8451;</sup>
        </span>

        <div className="font-semibold	text-[14px] text text-center">
          <h2>
            {city}, <span className="uppercase">{country}</span>
          </h2>
          <h2>{currentDate.toLocaleDateString(undefined, options)}</h2>
        </div>
      </section>

      <section className="h-[40px] border-t-[1px] border-solid | flex | text-[10px]">
        <section className="w-full | flex items-center justify-center">
          <div className="mr-[15px]">
            <FaWind fontSize="1.2rem" />
          </div>
          <div>
            <div>{directionConverter(weatherData.wind.deg)} Wind</div>
            <div>{weatherData.wind.speed} km/h</div>
          </div>
        </section>

        <section className="w-full | flex items-center justify-center">
          <section className="mr-[15px]">
            <FaThermometerHalf fontSize="1.2rem" />
          </section>
          <div>
            <div>Feels Like</div>
            <div>{weatherData.main.feels_like}&#8451;</div>
          </div>
        </section>
      </section>

      <section className="h-[40px] border-t-[1px] border-solid | flex | text-[10px]">
        <section className="w-full | flex items-center justify-center">
          <div className="mr-[15px]">
            <FaWater fontSize="1.2rem" />
          </div>
          <div>
            <div>Humidity</div>
            <div>{weatherData.main.humidity} %</div>
          </div>
        </section>

        <section className="w-full | flex items-center justify-center">
          <div className="mr-[15px]">
            <FaChartLine fontSize="1.2rem" />
          </div>
          <div>
            <div>Pressure</div>
            <div>{weatherData.main.pressure} hPa</div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Current;
