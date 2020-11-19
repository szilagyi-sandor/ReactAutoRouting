import { Route } from "../_Interfaces/Route";
import { getCombinations } from "./combinations";
import { createFullRoutePaths } from "./createFullRoutePaths";

export const getAllRoutePaths = (route: Route): string[] => {
  return getCombinations(createFullRoutePaths(route)).map((p) => p.join(""));
};
