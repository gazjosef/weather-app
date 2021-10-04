import { FaCalendar } from "react-icons/fa/calendar";

export default function MainWindow({ icon, description, temperature }) {
  return (
    <div className="main-window">
      <div className="main-window__main">
        {icon !== undefined ? (
          <img
            src={require(`../../assets/icons/${icon}.svg`).default}
            alt={description}
          />
        ) : (
          ""
        )}

        <h1>{description}</h1>
        <h1>Date</h1>
        <h1>{temperature}</h1>
      </div>
      <div className="main-window__secondary">
        <div className="secondary-window">
          <div className="secondary-window__icon">
            <FaCalendar />
          </div>
          <div className="secondary-window__info">
            <div>Wind</div>
            <div>Wind</div>
          </div>
        </div>
        <div className="secondary-window">
          <div className="secondary-window__icon">Feels Like</div>
          <div className="secondary-window__info">
            <div>Feels Like</div>
            <div>Feels Like</div>
          </div>
        </div>
      </div>
      <div className="main-window__secondary">
        <div className="secondary-window">
          <div className="secondary-window__icon">Index UV</div>
          <div className="secondary-window__info">
            <div>Index UV</div>
            <div>Index UV</div>
          </div>
        </div>
        <div className="secondary-window">
          <div className="secondary-window__icon">Pressure</div>
          <div className="secondary-window__info">
            <div>Pressure</div>
            <div>Pressure</div>
          </div>
        </div>
      </div>
    </div>
  );
}
