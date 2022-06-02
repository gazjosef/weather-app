import WeatherApp from "@/components/WeatherApp/WeatherApp";

export default function iPhone() {
  return (
    <>
      <div className="center">
        <div className="mobile">
          {/* Weather App */}
          <WeatherApp />

          <div className="home"></div>
          <div className="inner"></div>
          <ul className="volume">
            <li></li>
            <li></li>
          </ul>
          <ul className="silent">
            <li></li>
          </ul>
          <ul className="sleep">
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
