import { Route } from "../_Interfaces/Route";
import { getCombinations } from "./combinations";
import { createFullRoutePaths } from "./createFullRoutePaths";

export const getAllRoutePaths = (route: Route): string[] => {
  const paths = createFullRoutePaths(route);

  if (!paths) {
    return ["/"];
  }

  return getCombinations(paths).map((p) => p.join(""));
};
