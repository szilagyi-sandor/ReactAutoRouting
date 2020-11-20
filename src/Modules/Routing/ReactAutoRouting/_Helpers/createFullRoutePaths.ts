import { Route } from "../_Interfaces/Route";

export const createFullRoutePaths = (route: Route): string[][] | undefined => {
  let paths: string[][] = [];

  // For filtered items we return undefined,
  if (!route.parentsInfo || !route.paths || route.paths.length === 0) {
    return undefined;
  }

  paths = [...route.parentsInfo.paths];
  paths = [...paths, [...route.paths]];

  if (route.childrenInfo) {
    const childrenPaths: string[] = [];
    route.childrenInfo.forEach((ci) => {
      ci.paths.forEach((p) => {
        childrenPaths.push(p.join(""));
      });
    });

    paths = [...paths, childrenPaths];
  }

  return paths;
};
