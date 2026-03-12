import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 rotate-3 items-center justify-center rounded-lg bg-(--hover-color)">
          <Dumbbell size={24} className="-rotate-3" />
        </div>
        <span className="text-2xl font-extrabold tracking-wider">TRAINEER</span>
      </div>
      <div className="flex items-center gap-6 font-bold">
        <Link to="/login" className="text-sm transition-colors">
          Logowanie
        </Link>
        <Link
          to="/register"
          className="hidden sm:block rounded-xl bg-(--hover-color) px-6 py-2.5 text-sm transition-transform hover:scale-105"
        >
          Zacznij teraz
        </Link>
      </div>
    </nav>
  );
}
