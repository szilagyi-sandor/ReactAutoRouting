import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { routePaths } from "Modules/Routing/_Constants/routePaths";

export const adminNavItems: NavItem[] = [
  {
    text: "Route settings",
    url: routePaths.routeSetter,
  },
  {
    text: "Menu settings",
    url: routePaths.menuSetter,
  },
  {
    text: "Super secret",
    url: routePaths.superSecret,
  },
  {
    text: "Not found",
    url: "/admin/not-found",
  },
  {
    text: "Site",
    url: routePaths.home,
  },
];
