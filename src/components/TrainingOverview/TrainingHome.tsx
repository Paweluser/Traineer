import { StatsRow } from "./StatsRow";
import { TrainingBtn } from "./TrainingBtn";

export function TrainingHome() {
  return (
    <div className="relative mt-4 flex w-full flex-col items-start justify-center gap-1 rounded-2xl bg-(--glass-color)/50 p-4 backdrop-blur-xl">
      <p className="font-extralight">Polecane</p>
      <h2 className="mb-3 text-3xl">Optymalizuj swój trening</h2>
      <TrainingBtn />
      <StatsRow />
    </div>
  );
}
