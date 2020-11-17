import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { routePaths } from "Modules/Routing/_Constants/routePaths";

export const adminNavItems: NavItem[] = [
  {
    text: "AdminHome",
    url: routePaths.admin.homePage,
  },
  {
    text: "AdminTest2Page",
    url: routePaths.admin.test2Page,
  },
  {
    text: "AdminGreenTest1Page",
    url: routePaths.admin.green.test1Page,
  },
  {
    text: "AdminGreenTest2Page",
    url: routePaths.admin.green.test2Page,
  },
  {
    text: "Site",
    url: routePaths.site.homePage,
  },
];
