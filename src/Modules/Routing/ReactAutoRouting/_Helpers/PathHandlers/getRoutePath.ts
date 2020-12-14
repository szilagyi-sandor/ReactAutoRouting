import { Route } from "../../_Interfaces/Routes/Route";
import { getCombinations } from "../Generic/combinations";
import { createAllRoutePaths } from "./createAllRoutePaths";

// Gets one route path that is selectable with the index.
export const getRoutePath = (
  routeObj: Record<string, Route>,
  route: Route,
  index?: number
): string => {
  const paths = createAllRoutePaths(routeObj, route);

  if (!paths || paths.length === 0) {
    // There's something wrong with either the selectors, or the route/ a parent
    // has no given paths.
    return "/";
  }

  // If we have an index, we create all the combinations, and select the one given.
  if (index) {
    const combinations = getCombinations(paths);
    return combinations[index] ? combinations[index].join("") : "/";
  }

  // If there's no given index, we take the first paths. This is faster.
  return paths.map((p) => p[0]).join("");
};
