import { Route } from "../../_Interfaces/Routes/Route";

// Gets all the paths properties from a list of routes and returns them in an array.
// This is used as a helper function in internal helpers.
export const createPathsFromRouteList = (routeList: Route[]) => {
  const output: string[][] = [];

  for (let i = 0; i < routeList.length; i++) {
    const route = routeList[i];

    if (!route.paths || route.paths.length === 0) {
      return undefined;
    }

    output.push(route.paths);
  }

  return output;
};
