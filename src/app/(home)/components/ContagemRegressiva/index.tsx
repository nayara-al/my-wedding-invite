import Contador from "./Contador";

export default function CountdownTimer() {
  return (
    <div data-testid="cypress-contador" className="p-8 bg-white w-full flex flex-col gap-8">
      <Contador />
    </div>
  );
}
