import { RouteAsParam } from "../../_Interfaces/Routes/RouteAsParam";

// This is just a ts helper for better intellisense (hinding autocreated values).
export const createRoutes = <T extends Record<string, RouteAsParam>>(
  routeObj: T
): T => {
  return routeObj;
};
