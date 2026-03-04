import { TrendingUp, Flame } from "lucide-react";

export function LifetimeStats() {
  return (
    <div className="flex w-full flex-col gap-4 sm:w-1/3">
      <div className="flex items-center gap-2 px-2">
        <TrendingUp className="text-(--hover-color)" size={20} />
        <h2 className="text-lg font-bold text-(--text-color)">
          Statystyki Życiowe
        </h2>
      </div>
      <div className="flex flex-col gap-6 rounded-4xl bg-(--glass-color)/50 p-8">
        <div className="flex items-center justify-between">
          <span className="font-medium text-(--text-color)">Treningi</span>
          <span className="text-2xl font-bold text-(--text-color)">42</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-(--text-color)">Dni z rzędu</span>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-(--hover-color)">12</span>
            <Flame
              className="text-(--hover-color)"
              size={24}
              fill="currentColor"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-(--text-color)">
            Najlepszy tonaż
          </span>
          <span className="text-2xl font-bold text-(--text-color)">4.2t</span>
        </div>
      </div>
    </div>
  );
}
