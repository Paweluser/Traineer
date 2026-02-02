import { AppTitle } from "./AppTitle";
import { NotificationBtn } from "./NotificationBtn";
import { SearchInput } from "./SearchInput";
import { UserMenu } from "./UserMenu";

export function TopBar() {
  return (
    <div className="flex justify-around items-center">
      <NotificationBtn />
      <AppTitle />
      <SearchInput />
      <UserMenu />
    </div>
  );
}
