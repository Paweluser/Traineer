import { ProgressChart } from "../components/Chart/ProgressChart";
import { TrainingHome } from "../components/TrainingOverview/TrainingHome";

export function Training() {
  return (
    <>
      <TrainingHome />
      <ProgressChart />
    </>
  );
}
