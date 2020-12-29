import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import { routes } from "Modules/Routing/_Constants/routes";

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
    authRule: routes.dev.children.site.children.registration.authRule,
  },
  {
    text: "Login",
    url: routePaths.login,
    authRule: routes.dev.children.site.children.login.authRule,
  },
  {
    text: "Admin",
    url: routePaths.adminHome,
    authRule: routes.dev.children.admin.authRule,
  },
];
