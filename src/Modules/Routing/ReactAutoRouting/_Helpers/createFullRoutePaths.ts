import { Route } from "../_Interfaces/Route";

export const createFullRoutePaths = (route: Route): string[][] => {
  let paths: string[][] = [];

  if (route.parentsInfo) {
    paths = [...route.parentsInfo.paths];
  }

  paths = [...paths, ...(route.paths ? [route.paths] : [[""]])];

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
