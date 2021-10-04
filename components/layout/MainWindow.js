import { IconContext } from "react-icons";
import {
  FaWind,
  FaThermometerHalf,
  FaWater,
  FaChartLine,
} from "react-icons/fa";
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

export default function MainWindow({
  icon,
  description,
  time,
  temperature,
  wind,
  feelslike,
  humidity,
  pressure,
}) {
  const newIcon = (prop) => {
    return `<${prop} />`;
  };

  return (
    <div className="main-window">
      <div className="main-window__main">
        {/* ICON */}
        <IconContext.Provider value={{ size: "5rem" }}>
          <>{icon !== undefined ? newIcon(icon) : <WiSnow />}</>
        </IconContext.Provider>

        <h1>{icon}</h1>
        <h1>{description}</h1>
        <h1>{time}</h1>
        <h1>{temperature}&#8451;</h1>
      </div>
      <div className="main-window__secondary">
        <div className="secondary-window">
          <div className="secondary-window__icon">
            <FaWind />
          </div>
          <div className="secondary-window__info">
            <div>Wind</div>
            <div>{wind} km/h</div>
          </div>
        </div>
        <div className="secondary-window">
          <div className="secondary-window__icon">
            <FaThermometerHalf />
          </div>
          <div className="secondary-window__info">
            <div>Feels Like</div>
            <div>{feelslike}&#8451;</div>
          </div>
        </div>
      </div>
      <div className="main-window__secondary">
        <div className="secondary-window">
          <div className="secondary-window__icon">
            <FaWater />
          </div>
          <div className="secondary-window__info">
            <div>Humidity</div>
            <div>{humidity} %</div>
          </div>
        </div>
        <div className="secondary-window">
          <div className="secondary-window__icon">
            <FaChartLine />
          </div>
          <div className="secondary-window__info">
            <div>Pressure</div>
            <div>{pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
}
