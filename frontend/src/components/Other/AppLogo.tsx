import { Dumbbell } from "lucide-react";

export function AppLogo() {
  return (
    <div className="mt-1 flex h-12 w-12 rotate-45 items-center justify-center rounded-lg bg-(--hover-color) md:mt-2 md:h-15 md:w-15">
      <Dumbbell className="h-7 w-7 -rotate-45 md:h-9 md:w-9" />
    </div>
  );
}
