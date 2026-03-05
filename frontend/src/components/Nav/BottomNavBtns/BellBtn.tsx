import { BellDot } from "lucide-react";

type BellBtnProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function BellBtn({ isOpen, onClick }: BellBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer transition-all hover:scale-110 ${
        isOpen
          ? "text-(--hover-color)"
          : "text-(--text-color) hover:text-(--hover-color)"
      }`}
    >
      <BellDot className="h-8 w-8" />
    </button>
  );
}
