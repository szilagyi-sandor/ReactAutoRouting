import { Route } from "../../_Interfaces/Routes/Route";
import { RouteAsProp } from "../../_Interfaces/Routes/RouteAsProp";

export const convertRouteToRouteAsParam = (route: Route): RouteAsProp => {
  const output: RouteAsProp & Partial<Route> = {
    ...route,
  };
  delete output.Component;

  return output;
};
