import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { routePaths } from "Modules/Routing/_Constants/routePaths";

export const siteNavItems: NavItem[] = [
  {
    text: "About",
    url: routePaths.about,
  },
  {
    text: "Api",
    url: routePaths.api,
  },
  {
    text: "Contact",
    url: routePaths.contact,
  },
  {
    text: "Registration",
    url: routePaths.registration,
  },
  {
    text: "Login",
    url: routePaths.login,
  },
  {
    text: "Not found",
    url: "/not-found",
  },
  {
    text: "Admin",
    url: routePaths.adminHome,
  },
];
