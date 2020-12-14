import { Route } from "../../_Interfaces/Routes/Route";
import { RouteAsProp } from "../../_Interfaces/Routes/RouteAsProp";

// TODO: test this with a console.log
export const convertRouteToRouteAsParam = (route: Route): RouteAsProp => {
  const output: RouteAsProp & Partial<Route> = {
    ...route,
  };
  delete output.Component;

  return output;
};
