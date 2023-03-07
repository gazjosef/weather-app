import { IconContext } from "react-icons";

export default function Daily({ fiveHour, iconConverter }) {
  const timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);

    let hour = a.getHours();
    let min = ("0" + a.getMinutes()).slice(-2);
    // let sec = a.getSeconds();
    let time = hour + ":" + min;

    return time;
  };

  // DISPLAY FUTURE DATA
  const displayHour = fiveHour.map((hour, index) => {
    return (
      <div key={index} className="hour">
        <div className="hour__time">{timeConverter(hour.dt)}</div>

        <IconContext.Provider value={{ className: "hour__icon" }}>
          {iconConverter(hour.weather[0].icon)}
        </IconContext.Provider>

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
