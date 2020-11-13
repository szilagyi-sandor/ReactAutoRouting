import { RouteItem } from "../_Interfaces/RouteItem";

// TODO: test the order of this
export const deepMapRoutes = <T>(
  routes: Record<string, RouteItem>,
  mapperFunc: (routeItem: RouteItem, keys: string[], indexes: number[]) => T,
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
