import { getCombinations } from "Modules/Routing/__ReactAutoRouting/_Helpers/combinations";
import { Route } from "../../_Interfaces/Route";
import { createAllRoutePaths } from "./createAllRoutePaths";

export const getAllRoutePaths = (
  routeObj: Record<string, Route>,
  route: Route
): string[] => {
  const paths = createAllRoutePaths(routeObj, route);

  if (!paths || paths.length === 0) {
    // There's something wrong with either the selectors, or the route/ a parent
    // has no given paths.
    return ["/"];
  }

  return getCombinations(paths).map((paths) => paths.join(""));
};
