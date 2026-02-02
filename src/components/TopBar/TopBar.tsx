import { AppTitle } from "./AppTitle";
import { NotificationBtn } from "./NotificationBtn";
import { SearchInput } from "./SearchInput";
import { UserMenu } from "./UserMenu";

export function TopBar() {
  return (
    <>
      <NotificationBtn />
      <AppTitle />
      <SearchInput />
      <UserMenu />
    </>
  );
}
