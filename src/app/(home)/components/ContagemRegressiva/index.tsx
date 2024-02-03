"use client";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="p-8 bg-white w-full flex flex-col gap-8">
      <p className="text-center font-bold text-xl font-poppins text-gray-500">Contagem regressiva para {targetDate.toLocaleDateString()}</p>
      <div className="flex gap-8 items-center justify-center">
          <div className="bg-primary text-white rounded-lg font-semibold w-20 h-20 flex flex-col items-center justify-center">
            {timeLeft.days}
            <p>dias</p>
          </div>
          <div className="bg-primary text-white rounded-lg font-semibold w-20 h-20 flex flex-col items-center justify-center">
            {timeLeft.hours}
            <p>horas</p>
          </div>
          <div className="bg-primary text-white rounded-lg font-semibold w-20 h-20 flex flex-col items-center justify-center">
            {timeLeft.minutes}
            <p>minutos</p>
          </div>
          <div className="bg-primary text-white rounded-lg font-semibold w-20 h-20 flex flex-col items-center justify-center">
            {timeLeft.seconds}
            <p>segundos</p>
          </div>
      </div>
    </div>
  );
}
