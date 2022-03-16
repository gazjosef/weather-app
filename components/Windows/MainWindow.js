import { IconContext } from "react-icons";
import {
  FaWind,
  FaThermometerHalf,
  FaWater,
  FaChartLine,
} from "react-icons/fa";

export default function MainWindow({
  icon,
  description,
  degrees,
  date,
  temperature,
  wind,
  feelslike,
  humidity,
  pressure,
}) {
  return (
    <article className="main-window">
      {/* Main Window */}
      <section className="main-window__main">
        <IconContext.Provider value={{ size: "10em" }}>
          {icon}
        </IconContext.Provider>

        <h2 className="heading-secondary">{description}</h2>
        <h2 className="heading-main">{temperature}&#8451;</h2>
        <h2 className="heading-secondary  ">{date}</h2>
      </section>

      {/* Secondary Windows */}
      <section className="main-window__secondary">
        <section className="secondary-window">
          <div className="secondary-window__icon">
            <FaWind fontSize="1.5rem" />
          </div>
          <div className="secondary-window__info">
            <div>{degrees} Wind</div>
            <div>{wind} km/h</div>
          </div>
        </section>
        <section className="secondary-window">
          <section className="secondary-window__icon">
            <FaThermometerHalf fontSize="1.5rem" />
          </section>
          <div className="secondary-window__info">
            <div>Feels Like</div>
            <div>{feelslike}&#8451;</div>
          </div>
        </section>
      </section>
      <section className="main-window__secondary">
        <section className="secondary-window">
          <div className="secondary-window__icon">
            <FaWater fontSize="1.5rem" />
          </div>
          <div className="secondary-window__info">
            <div>Humidity</div>
            <div>{humidity} %</div>
          </div>
        </section>
        <section className="secondary-window">
          <div className="secondary-window__icon">
            <FaChartLine fontSize="1.5rem" />
          </div>
          <div className="secondary-window__info">
            <div>Pressure</div>
            <div>{pressure} hPa</div>
          </div>
        </section>
      </section>
    </article>
  );
}
