import { Route } from "../../_Interfaces/Routes/Route";
import { getCombinations } from "../Generic/combinations";
import { createAllRoutePaths } from "./createAllRoutePaths";

// Gets all route paths and return them as an array.
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
