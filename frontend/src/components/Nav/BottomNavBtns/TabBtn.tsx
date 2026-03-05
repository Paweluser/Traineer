type TabBtnProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function TabBtn({ label, isActive, onClick }: TabBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-4 py-3 text-sm font-semibold transition-colors ${
        isActive
          ? "border-b-2 border-(--hover-color) text-(--hover-color)"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
