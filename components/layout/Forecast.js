import { IconContext } from "react-icons";

import { stringify } from "json5";

export default function Forecast({ fiveHour, iconConverter, timeConverter }) {
  const displayHour = fiveHour.map((hour, index) => {
    return (
      <div key={index} className="hour">
        <div className="hour__time">{timeConverter(hour.dt)}</div>
        <div className="hour__icon">
          <IconContext.Provider value={{ size: "2em" }}>
            {iconConverter(hour.weather[0].icon)}
          </IconContext.Provider>
        </div>
        <div className="hour__temp">
          {stringify(hour.main.temp - 273.15).slice(0, 2)}&#8451;
        </div>
      </div>
    );
  });

  return (
    <div className="forecast">
      <div className="forecast__header">
        <h1>Next 5 Hours</h1>
      </div>
      <div className="forecast__hours">{displayHour}</div>
    </div>
  );
}
