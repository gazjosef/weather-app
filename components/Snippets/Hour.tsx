import Icon from "./Icon.tsx";

const timeConverter = (UNIX_timestamp: number): string => {
  const a = new Date(UNIX_timestamp * 1000);
  const hour: number = a.getHours();
  const min: string = ("0" + a.getMinutes()).slice(-2);
  const time: string = hour + ":" + min;
  return time;
};

interface HourProps {
  time: number;
  icon: string;
  temp: number;
}

export default function Hour({ time, icon, temp }: HourProps) {
  return (
    <div className="hour | bg-sky-500 w-[35px] h-[70px] p-[5px] border-solid rounded-[10px] | flex flex-col items-center justify-between | text-[9px] text-white">
      <div>{timeConverter(time)}</div>
      <Icon icon={icon} textSize={80} />
      <div className="font-semibold">
        {JSON.stringify(temp - 273.15).slice(0, 2)}
        <sup className="text-[6px]">&#8451;</sup>
      </div>
    </div>
  );
}
