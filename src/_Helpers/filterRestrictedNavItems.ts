import { checkAuth } from "Modules/Auth/_Helpers/checkAuth";
import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { UserInfo } from "Modules/Routing/ReactAutoRouting/_Interfaces/Auth/UserInfo";

export const filterRestrictedNavItems = (
  navItems: NavItem[],
  userInfo?: UserInfo
) => {
  return navItems.filter(
    (item) => !item.authRule || checkAuth(item.authRule, userInfo)
  );
};
