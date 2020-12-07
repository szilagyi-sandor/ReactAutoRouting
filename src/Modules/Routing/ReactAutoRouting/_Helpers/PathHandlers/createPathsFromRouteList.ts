import { Route } from "../../_Interfaces/Route";

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
