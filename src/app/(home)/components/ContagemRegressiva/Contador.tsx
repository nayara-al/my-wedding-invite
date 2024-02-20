"use client";
import useCountdown from "@/hooks/useCountdown";

export default function Contador() {
  const [day, hour, minute, second] = useCountdown(
    new Date("Dec 16, 2024 19:00:00")
  );
  return (
    <>
      <h3 data-testid="cypress-title-contagem" className="text-center font-bold text-xl font-poppins text-gray-500">
        Contagem regressiva
      </h3>
      <div data-testid="cypress-contador-components" className="flex gap-8 items-center justify-center">
        <div className="bg-primary text-white rounded-lg font-semibold w-20 h-20 flex flex-col items-center justify-center">
          {day}
          <p>dias</p>
        </div>
        <div className="bg-primary text-white rounded-lg font-semibold w-20 h-20 flex flex-col items-center justify-center">
          {hour}
          <p>horas</p>
        </div>
        <div className="bg-primary text-white rounded-lg font-semibold w-20 h-20 flex flex-col items-center justify-center">
          {minute}
          <p>minutos</p>
        </div>
        <div className="bg-primary text-white rounded-lg font-semibold w-20 h-20 flex flex-col items-center justify-center">
          {second}
          <p>segundos</p>
        </div>
      </div>
    </>
  );
}
