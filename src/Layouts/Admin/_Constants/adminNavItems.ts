import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { routePaths } from "Modules/Routing/_Constants/routePaths";

export const adminNavItems: NavItem[] = [
  {
    text: "Admin home",
    url: routePaths.admin.home,
  },
  {
    text: "Route settings",
    url: routePaths.admin.routeSetter,
  },
  {
    text: "Menu settings",
    url: routePaths.admin.menuSetter,
  },
  {
    text: "Super secret",
    url: routePaths.admin.superSecret,
  },
  {
    text: "Site",
    url: routePaths.site.home,
  },

  // TODO: remove
  {
    text: "Test1",
    url: routePaths.test1,
  },
  {
    text: "Purpe test1",
    url: routePaths.admin.purple.test1,
  },
  {
    text: "Not found",
    url: "/admin/not-found",
  },
];
