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

export default function Forecast({ fiveHour, iconConverter, timeConverter }) {
  const displayHour = fiveHour.map((hour, index) => {
    return (
      <div key={index} className="hour">
        <div className="hour__time">{timeConverter(hour.dt)}</div>
        <div className="hour__icon">{iconConverter(hour.weather[0].icon)}</div>
        <div className="hour__temp">{hour.main.temp}</div>
      </div>
    );
  });

  return (
    <div className="forecast">
      <div className="forecast__header">
        <h1>Today</h1>
        <h1>Next 7 Days &#62; </h1>
      </div>
      <div className="forecast__hours">{displayHour}</div>
    </div>
  );
}
