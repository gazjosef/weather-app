export default function Forecast() {
  return (
    <div className="forecast">
      <div className="forecast__header">
        <h1>Today</h1>
        <h1>Next 7 Days &#62; </h1>
      </div>
      <div className="forecast__hours">
        <div className="hour"></div>
        <div className="hour"></div>
        <div className="hour"></div>
        <div className="hour"></div>
        <div className="hour"></div>
      </div>
    </div>
  );
}
