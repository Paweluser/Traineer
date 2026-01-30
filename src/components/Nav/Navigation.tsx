import {
  ClipboardList,
  Dumbbell,
  MessageCircle,
  TrendingUp,
  User,
} from "lucide-react";
import { NavItem } from "./NavItem";

type PropsNav = {
  variant: "mobile" | "desktop";
};

export function Navigation({ variant }: PropsNav) {
  const navItems = [
    {
      label: "Trening",
      to: "/Training",
      icon: Dumbbell,
    },
    {
      label: "Plan",
      to: "/Plan",
      icon: ClipboardList,
    },
    {
      label: "Postępy",
      to: "/Progress",
      icon: TrendingUp,
    },
    {
      label: "Czat",
      to: "/Messages",
      icon: MessageCircle,
    },
    {
      label: "Profil",
      to: "/Profile",
      icon: User,
    },
  ];

  if (variant === "mobile") {
    return (
      <nav className="fixed right-0 bottom-0 left-0 z-50 m-1 rounded-2xl border border-white/20 bg-(--main-color) backdrop-blur">
        <ul className="mx-auto grid max-w-7xl grid-cols-5 py-2">
          {navItems.map(({ label, to, icon }) => (
            <li key={to} className="flex justify-center">
              <NavItem to={to} label={label} icon={icon} />
            </li>
          ))}
        </ul>
      </nav>
    );
  } else if (variant === "desktop") {
    return (
      <nav className="h-full rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
        <ul className="flex flex-col gap-1">
          {navItems.map(({ label, to, icon }) => (
            <li key={to} className="">
              <NavItem to={to} label={label} icon={icon} />
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
