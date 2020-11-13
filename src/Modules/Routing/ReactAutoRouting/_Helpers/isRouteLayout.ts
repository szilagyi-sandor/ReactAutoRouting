import { RouteItem } from "../_Interfaces/RouteItem";
import { RouteLayout } from "../_Interfaces/RouteLayout";

export const isRouteLayout = (route: RouteItem): RouteLayout | false => {
  if (route.children) {
    return route;
  }

  return false;
};
