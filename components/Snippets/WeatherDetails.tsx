import { ReactNode } from "react";

interface WeatherDetailsProps {
  title: string;
  details: number | string;
  children: ReactNode;
  symbol: string;
}
export default function WeatherDetails({
  title,
  details,
  children,
  symbol,
}: WeatherDetailsProps) {
  return (
    <div className="w-full | flex items-center justify-between gap-3 px-4">
      <div className="grid place-items-center">{children}</div>
      <div>
        <h3>{title}</h3>
        <span>
          {details} {symbol}
        </span>
      </div>
    </div>
  );
}
