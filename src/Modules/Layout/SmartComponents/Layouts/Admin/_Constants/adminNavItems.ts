import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { routePaths } from "Modules/Routing/_Constants/routePaths";

export const adminNavItems: NavItem[] = [
  {
    text: "Admin home",
    url: routePaths.admin.homePage,
  },
  {
    text: "Test 1",
    url: routePaths.admin.test2Page,
  },
  {
    text: "Test 2",
    url: routePaths.admin.green.test1Page,
  },
  {
    text: "Test 3",
    url: routePaths.admin.green.test2Page,
  },
  {
    text: "Not found",
    url: "/admin/not-found",
  },
  {
    text: "Site",
    url: routePaths.site.homePage,
  },
];
