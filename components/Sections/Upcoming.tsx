import { WeatherData } from "../Layout/WeatherApp";
import Hour from "../Snippets/Hour";

interface UpcomingProps {
  upcomingData: WeatherData[] | null;
}

export default function Upcoming({ upcomingData }: UpcomingProps) {
  if (upcomingData) {
    console.log("upcomingData", upcomingData);
  }

  return (
    <div className="h-[100px] w-full | flex flex-col justify-between">
      {upcomingData && (
        <>
          <h1 className="text-sm text-left">Hourly Forecast</h1>

          <div className="daily__hours | flex items-center justify-between">
            {upcomingData.map((data) => (
              <Hour
                key={data.dt}
                time={data.dt}
                icon={data.weather[0].icon}
                temp={data.main.temp}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
