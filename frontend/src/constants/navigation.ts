import {
  ClipboardList,
  Dumbbell,
  BotMessageSquare,
  TrendingUp,
  User,
} from "lucide-react";

export const navItems = [
    {
      label: "Trening",
      to: "/training",
      icon: Dumbbell,
    },
    {
      label: "Plan",
      to: "/plan",
      icon: ClipboardList,
    },
    {
      label: "Postępy",
      to: "/progress",
      icon: TrendingUp,
    },
    {
      label: "AI",
      to: "/bot",
      icon: BotMessageSquare,
    },
    {
      label: "Profil",
      to: "/profile",
      icon: User,
    },
  ];