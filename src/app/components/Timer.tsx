import { useState, useEffect } from "react";
type TimeUnitProps = {
  value: number | string;
  label: string;
};
const TimeUnit = ({ value, label }: TimeUnitProps) => {
  return (
    <div>
      <div className="text-4xl font-bold">{value}</div>
      <div className="text-md tracking-widest">{label}</div>
    </div>
  );
};

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const totalSeconds: number = Math.max(
    0,
    Math.floor((targetDate.getTime() - now.getTime()) / 1000),
  );
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export default function Timer() {
  const targetDate = new Date("2025-08-30T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = getTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      if (
        newTimeLeft.days <= 0 &&
        newTimeLeft.hours <= 0 &&
        newTimeLeft.minutes <= 0 &&
        newTimeLeft.seconds <= 0
      ) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div>
      <div className="p-[3px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">
        <div className="flex gap-6 px-8 text-lg md:text-3xl py-4 bg-black rounded-2xl font-mono text-white text-center">
          <TimeUnit value={timeLeft.days || "00"} label="Days" />
          <TimeUnit value={timeLeft.hours || "00"} label="Hours" />
          <TimeUnit value={timeLeft.minutes || "00"} label="Mins" />
          <TimeUnit value={timeLeft.seconds || "00"} label="Secs" />
        </div>
      </div>
    </div>
  );
}
