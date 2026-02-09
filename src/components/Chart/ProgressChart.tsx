import { LineGraph } from "./Line";

export function ProgressChart() {
  return (
    <div className="mt-7 flex w-full flex-col items-start justify-center gap-1 overflow-hidden rounded-2xl bg-(--glass-color)/50 p-4 backdrop-blur-xl md:gap-5">
      <div className="w-full min-w-0">
        <h2 className="text-2xl font-bold">Twoje postępy</h2>
        <p className="my-4 font-extralight">Dziennie przez 7 dni</p>
        <LineGraph />
      </div>
    </div>
  );
}
