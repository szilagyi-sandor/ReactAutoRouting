import { Route } from "../_Interfaces/Route";

// This is just a ts helper for better intellisense (hinding autocreated values).
export const createRoutes = <T extends Record<string, RouteAsParam>>(
  routeObj: T
): T => {
  return routeObj;
};

interface RouteAsParam
  extends Pick<
    Route,
    "Component" | "documentTitle" | "paths" | "children" | "authRule"
  > {
  children?: Record<string, RouteAsParam>;
}
