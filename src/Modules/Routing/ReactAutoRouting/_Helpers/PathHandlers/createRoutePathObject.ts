import { Route } from "../../_Interfaces/Routes/Route";
import { getRoutePath } from "./getRoutePath";

export const createRoutePathObject = <T extends Record<string, Route>>(
  routeObj: Record<string, Route>,
  param: T
): Record<keyof T, string> => {
  const output = {} as Record<keyof T, string>;

  Object.keys(param).forEach((key: keyof T) => {
    output[key] = getRoutePath(routeObj, param[key]);
  });

  return output;
};
