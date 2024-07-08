const currentTime = Date.now();
const currentDate = new Date(currentTime ?? 0);
const options: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
};

export default function Time() {
  return <span>{currentDate.toLocaleDateString(undefined, options)}</span>;
}
