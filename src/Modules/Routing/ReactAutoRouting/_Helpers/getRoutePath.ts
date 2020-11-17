import { Route } from "../_Interfaces/Route";
import { getCombinations } from "./combinations";
import { getFullRoutePaths } from "./getFullRoutePaths";

// Parameter must be a processed route
export const getRoutePath = (route: Route, index?: number): string => {
  let paths = getFullRoutePaths(route);

  if (index) {
    const combinations = getCombinations(paths);
    return combinations[index] ? combinations[index].join("") : "/";
  }

  return paths.map((p) => p[0]).join("");
};
