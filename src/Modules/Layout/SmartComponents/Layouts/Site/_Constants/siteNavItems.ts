import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { routePaths } from "Modules/Routing/_Constants/routePaths";

export const siteNavItems: NavItem[] = [
  {
    text: "Home",
    url: routePaths.site.homePage,
  },
  {
    text: "Green Test-1",
    url: routePaths.site.green.test1Page,
  },
  {
    text: "Green Test-2",
    url: routePaths.site.green.test2Page,
  },
  {
    text: "RedGreenTest-1",
    url: routePaths.site.red.green.test1Page,
  },
  {
    text: "Admin",
    url: routePaths.admin.homePage,
  },
];
