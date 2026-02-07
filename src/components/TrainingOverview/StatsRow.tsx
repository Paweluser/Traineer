import { quickStats } from "../../constants/statCard";
import { StatCard } from "./StatCard";

export function StatsRow() {
  return (
    <div className="mt-3 w-full rounded-2xl bg-(--glass-color)/70 p-3 backdrop-blur-xl">
      <ul className="flex items-center justify-around gap-4">
        {quickStats.map(({ label, value, unit, icon }) => {
          return (
            <li key={label} className="">
              <StatCard label={label} value={value} unit={unit} icon={icon} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
