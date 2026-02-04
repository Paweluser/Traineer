import { AppTitle } from "./AppTitle";
import { MailBtn } from "./MailBtn";
import { SearchInput } from "./SearchInput";
import { UserMenu } from "./UserMenu";

export function TopBar() {
  return (
    <div className="flex items-center justify-around lg:gap-4 lg:mt-7">
      <MailBtn />
      <AppTitle />
      <SearchInput />
      <UserMenu />
    </div>
  );
}
