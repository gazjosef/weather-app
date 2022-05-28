import { IconContext } from "react-icons";
import {
  FaWind,
  FaThermometerHalf,
  FaWater,
  FaChartLine,
} from "react-icons/fa";

export default function Current({
  city,
  country,
  icon,
  date,
  time,
  description,
  feelslike,
  temperature,
  degrees,
  wind,
  humidity,
  pressure,
}) {
  const dateConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let day = a.getDate();
    let date = day + " " + month + " " + year;

    return date;
  };

  const directionConverter = (degrees) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    let direction = (degrees * 8) / 360;
    direction = Math.round(direction, 0);
    direction = (direction + 8) % 8;

    return directions[direction];
  };

  return (
    <article className="current">
      {/* Main Window */}
      <section className="current__main">
        <div className="main__time">
          <IconContext.Provider value={{ className: "main__icon" }}>
            {icon}
          </IconContext.Provider>

          <span>
            <h2>
              {city}, {country}
            </h2>
          </span>
        </div>

        <div className="main__description">
          <h2>
            {dateConverter(date)}
            {time}
          </h2>
          <span>
            <h2>{temperature}&#8451;</h2>
          </span>
          <h2>{description}</h2>
        </div>
      </section>

      {/* Secondary Windows */}
      <section className="current__secondary">
        <section className="secondary">
          <div className="secondary__icon">
            <FaWind fontSize="1.5rem" />
          </div>
          <div className="secondary__info">
            <div>{directionConverter(degrees)} Wind</div>
            <div>{wind} km/h</div>
          </div>
        </section>
        <section className="secondary">
          <section className="secondary__icon">
            <FaThermometerHalf fontSize="1.5rem" />
          </section>
          <div className="secondary__info">
            <div>Feels Like</div>
            <div>{feelslike}&#8451;</div>
          </div>
        </section>
      </section>
      <section className="current__secondary">
        <section className="secondary">
          <div className="secondary__icon">
            <FaWater fontSize="1.5rem" />
          </div>
          <div className="secondary__info">
            <div>Humidity</div>
            <div>{humidity} %</div>
          </div>
        </section>
        <section className="secondary">
          <div className="secondary__icon">
            <FaChartLine fontSize="1.5rem" />
          </div>
          <div className="secondary__info">
            <div>Pressure</div>
            <div>{pressure} hPa</div>
          </div>
        </section>
      </section>
    </article>
  );
}
