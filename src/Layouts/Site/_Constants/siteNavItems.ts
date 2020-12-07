import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { routePaths } from "Modules/Routing/_Constants/routePaths";

export const siteNavItems: NavItem[] = [
  {
    text: "About",
    url: routePaths.site.about,
  },
  {
    text: "Contact",
    url: routePaths.site.contact,
  },
  {
    text: "Api",
    url: routePaths.site.api,
  },
  {
    text: "Registration",
    url: routePaths.site.registration,
  },
  {
    text: "Login",
    url: routePaths.site.login,
  },
  {
    text: "Admin",
    url: routePaths.admin.home,
  },

  // TODO: remove:
  {
    text: "Test1",
    url: routePaths.test1,
  },
  {
    text: "Purple test2",
    url: routePaths.site.purple.test2,
  },
  {
    text: "Nested purple test1",
    url: routePaths.site.purple.purple.test1,
  },
  {
    text: "Not found",
    url: "/not-found",
  },
];
