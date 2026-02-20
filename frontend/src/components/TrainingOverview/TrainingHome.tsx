import { StatsRow } from "./StatsRow";
import { TrainingBtn } from "./TrainingBtn";

export function TrainingHome() {
  return (
    <div className="relative mt-10 flex w-full flex-col items-start justify-center gap-1 md:gap-5 rounded-2xl bg-(--glass-color)/50 p-4 backdrop-blur-xl">
      <p className="font-extralight">Twój plan na dziś</p>
      <h2 className="mb-3 text-3xl">Klata i triceps</h2>
      <TrainingBtn />
      <StatsRow />
      <img
        src="/HeroTraining.png"
        className="absolute top-0 right-0 -z-10 h-64 w-64 overflow-hidden object-cover max-sm:hidden md:block"
        width="100"
        height="100"
      />
    </div>
  );
}
