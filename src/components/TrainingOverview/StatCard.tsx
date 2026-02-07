import { type LucideIcon } from "lucide-react";

type QuickStat = {
  label: string;
  value: number;
  unit: string;
  icon: LucideIcon;
};

export function StatCard({ label, value, unit, icon }: QuickStat) {
  const Icon = icon;

  return (
    <>
      <p className="text-center">
        {value}
        <span>{unit}</span>
      </p>
      <div className="mt-1.5 flex items-center gap-2">
        <Icon className="h-5 w-5 text-(--hover-color) md:mb-1.5 md:h-8 md:w-8 lg:mb-5 lg:h-8 lg:w-8" />
        <p className="font-extralight">{label}</p>
      </div>
    </>
  );
}
