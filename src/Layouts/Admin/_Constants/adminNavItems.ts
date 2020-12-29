import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import { routes } from "Modules/Routing/_Constants/routes";
import { generatePath } from "react-router-dom";

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
    // This is an example for handling parameters in the URL.
    url: generatePath(routePaths.superSecret, { id: 42 }),
    authRule: routes.dev.children.admin.children.superSecret.authRule,
  },
  {
    text: "Site",
    url: routePaths.home,
  },
];
