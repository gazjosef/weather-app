import React from "react";
import { UpcomingData, WeatherEntry } from "./WeatherApp";
// ** Import Icons
import { IconContext } from "react-icons";
import { iconConverter } from "../Snippets/iconConverter.tsx";

interface UpcomingProps {
  upcomingData: UpcomingData[] | null;
}

const Upcoming: React.FC<UpcomingProps> = ({ upcomingData }) => {
  const timeConverter = (UNIX_timestamp: number): string => {
    const a = new Date(UNIX_timestamp * 1000);
    const hour: number = a.getHours();
    const min: string = ("0" + a.getMinutes()).slice(-2);
    const time: string = hour + ":" + min;
    return time;
  };

  if (upcomingData) {
    console.log("upcomingData", upcomingData);
  }

  return (
    <div className="h-[100px] w-full | flex flex-col justify-between">
      <h1 className="text-sm text-left">Hourly Forecast</h1>
      <div className="daily__hours | flex items-center justify-between">
        {upcomingData &&
          upcomingData.map((data, index) => (
            <div
              key={index}
              className="hour | bg-sky-500 w-[35px] h-[70px] p-[5px] border-solid rounded-[10px] | flex flex-col items-center justify-between | text-[9px] text-white"
            >
              <div>{timeConverter(data.dt)}</div>
              <IconContext.Provider value={{ size: "2em" }}>
                {data.weather &&
                  data.weather.length > 0 &&
                  iconConverter(data.weather[0].icon)}
              </IconContext.Provider>
              <div>
                {data.main &&
                  JSON.stringify(data.main.temp - 273.15).slice(0, 2)}
                &#8451;
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Upcoming;
