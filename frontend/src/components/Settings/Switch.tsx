type SwitchProps = {
  active: boolean;
};

export function Switch({ active }: SwitchProps) {
  return (
    <div
      className={`flex h-6 w-11 cursor-pointer items-center rounded-full p-1 transition-colors ${
        active ? "bg-(--hover-color)" : "bg-(--grey-color-text)"
      }`}
    >
      <div
        className={`h-4 w-4 rounded-full bg-(--text-color) transition-transform ${
          active ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </div>
  );
}
