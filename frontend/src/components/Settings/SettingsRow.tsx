import { ChevronRight } from "lucide-react";

type SettingsRowProps = {
  icon: React.ElementType;
  label: string;
  danger?: boolean;
  tailElement?: React.ReactNode;
};

export function SettingsRow({
  icon: Icon,
  label,
  danger = false,
  tailElement = <ChevronRight className="text-gray-500" size={20} />,
}: SettingsRowProps) {
  return (
    <button className="flex w-full cursor-pointer items-center justify-between rounded-2xl p-4 transition-colors hover:bg-(--text-color)/5">
      <div className="flex items-center gap-4">
        <div
          className={`flex items-center justify-center rounded-xl bg-black/20 p-2 ${danger ? "text-red-500" : "text-(--grey-color-text)"}`}
        >
          <Icon size={20} />
        </div>
        <span
          className={`font-semibold ${danger ? "text-red-500" : "text-white"}`}
        >
          {label}
        </span>
      </div>
      <div>{tailElement}</div>
    </button>
  );
}
