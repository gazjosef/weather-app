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
// import { ReactIcons } from "react-icons/wi";

export default function MainWindow({
  icon,
  description,
  date,
  temperature,
  wind,
  feelslike,
  humidity,
  pressure,
}) {
  return (
    <div className="main-window">
      {/* Main Window */}
      <div className="main-window__main">
        {/* <h1>{icon}</h1> */}
        <WiDayCloudy size="8rem" />

        <h2 className="heading-secondary">{description}</h2>
        <h2 className="heading-main">{date}</h2>
        <h2 className="heading-main">{temperature}&#8451;</h2>
      </div>
      {/* Secondary Windows */}
      <div className="main-window__secondary">
        <div className="secondary-window">
          <div className="secondary-window__icon">
            <FaWind size="1.5rem" />
          </div>
          <div className="secondary-window__info">
            <div>Wind</div>
            <div>{wind} km/h</div>
          </div>
        </div>
        <div className="secondary-window">
          <div className="secondary-window__icon">
            <FaThermometerHalf size="1.5rem" />
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
            <FaWater size="1.5rem" />
          </div>
          <div className="secondary-window__info">
            <div>Humidity</div>
            <div>{humidity} %</div>
          </div>
        </div>
        <div className="secondary-window">
          <div className="secondary-window__icon">
            <FaChartLine size="1.5rem" />
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
