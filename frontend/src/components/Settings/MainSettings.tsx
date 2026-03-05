import { HelpCircle, LogOut, Moon, User, Weight } from "lucide-react";
import { SettingsRow } from "./SettingsRow";
import { Switch } from "./Switch";

export function MainSettings() {
  return (
    <div className="flex w-full flex-col gap-8 p-4 md:p-8 mt-8">
      <div className="flex flex-col gap-1 rounded-4xl bg-(--glass-color)/50 p-4 backdrop-blur-xl">
        <SettingsRow icon={User} label="Konto" />
        <SettingsRow icon={Weight} label="Jednostki (kg/lbs)" />
        <SettingsRow
          icon={Moon}
          label="Tryb ciemny"
          tailElement={<Switch active={true} />}
        />
        <SettingsRow icon={HelpCircle} label="Pomoc" />
        <SettingsRow
          icon={LogOut}
          label="Wyloguj się"
          danger={true}
          tailElement={<div />}
        />
      </div>
    </div>
  );
}
