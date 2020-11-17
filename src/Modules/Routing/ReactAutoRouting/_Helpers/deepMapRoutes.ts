import { Route } from "../_Interfaces/Route";

export const deepMapRoutes = (
  routes: Record<string, Route>,
  mapperFunc: (routeItem: Route, keys: string[], indexes: number[]) => void,
  prevKeys: string[] = [],
  prevIndexes: number[] = []
) => {
  Object.keys(routes).forEach((key, index) => {
    const route = routes[key];
    const currentKeys = [...prevKeys, key];
    const currentIndexes = [...prevIndexes, index];

    mapperFunc(route, currentKeys, currentIndexes);

    if (route.children) {
      deepMapRoutes(route.children, mapperFunc, currentKeys, currentIndexes);
    }
  });
};
