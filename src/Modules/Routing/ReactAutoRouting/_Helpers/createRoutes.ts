import { Route } from "../_Interfaces/Route";

// This is just a ts helper for better intellisense (hinding autocreated values).
export const createRoutes = <T extends Record<string, RouteAsParam>>(
  routes: T
): T => {
  return routes;
};

interface RouteAsParam
  extends Pick<
    Route,
    "Component" | "documentTitle" | "paths" | "authRule" | "children"
  > {
  children?: Record<string, RouteAsParam>;
}
