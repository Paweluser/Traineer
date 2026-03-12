import { GoalProgress } from "../components/GoalProgress/GoalProgress";
import { PersonalRecords } from "../components/PersonalRecords/PersonalRecords";
import { TrainingHome } from "../components/TrainingOverview/TrainingHome";

export function Training() {
  return (
    <>
      <TrainingHome />
      <PersonalRecords />
      <GoalProgress />
    </>
  );
}
