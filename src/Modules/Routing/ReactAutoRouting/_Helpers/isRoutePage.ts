import { RouteItem } from "../_Interfaces/RouteItem";
import { RoutePage } from "../_Interfaces/RoutePage";

export const isRoutePage = (route: RouteItem): RoutePage | false => {
  if (route.children) {
    return false;
  }

  return route;
};
