import { IconContext } from "react-icons";

export default function Daily({ fiveHour, iconConverter, timeConverter }) {
  const displayHour = fiveHour.map((hour, index) => {
    return (
      <div key={index} className="hour">
        <div className="hour__time">{timeConverter(hour.dt)}</div>
        {/* <div className="hour__icon"> */}
        <IconContext.Provider
          value={{
            // size: "2em",
            className: "hour__icon",
          }}
        >
          {iconConverter(hour.weather[0].icon)}
        </IconContext.Provider>
        {/* </div> */}
        <div className="hour__temp">
          {JSON.stringify(hour.main.temp - 273.15).slice(0, 2)}&#8451;
        </div>
      </div>
    );
  });

  return (
    <div className="daily">
      <div className="daily__header">
        <h1>Next 5 Hours</h1>
      </div>
      <div className="daily__hours">{displayHour}</div>
    </div>
  );
}
