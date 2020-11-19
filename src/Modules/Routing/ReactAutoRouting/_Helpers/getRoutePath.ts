import { Route } from "../_Interfaces/Route";
import { getCombinations } from "./combinations";
import { createFullRoutePaths } from "./createFullRoutePaths";

// Parameter must be a processed route
export const getRoutePath = (route: Route, index?: number): string => {
  let paths = createFullRoutePaths(route);

  if (index) {
    const combinations = getCombinations(paths);
    return combinations[index] ? combinations[index].join("") : "/";
  }

  return paths.map((p) => p[0]).join("");
};
