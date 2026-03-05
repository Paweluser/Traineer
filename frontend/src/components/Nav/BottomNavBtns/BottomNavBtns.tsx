import { Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { NotificationPanel } from "./NotificationPanel";

export function BottomNavBtns() {
  return (
    <div className="mt-auto flex flex-col items-center justify-end">
      <NotificationPanel />
      <NavLink to="/settings">
        {({ isActive }) => (
          <Settings
            className={`h-8 w-8 mb-10 cursor-pointer transition-all hover:scale-110 hover:text-(--hover-color) ${
              isActive ? "text-(--hover-color)" : "text-white"
            }`}
          />
        )}
      </NavLink>
    </div>
  );
}
