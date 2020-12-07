import { Route } from "../_Interfaces/Route";

export const createFullRoutePaths = (route: Route): string[][] | undefined => {
  let paths: string[][] = [];

  if (!route) {
    return undefined;
  }

  // For filtered items we return undefined,
  if (!route.parentsInfo || !route.paths || route.paths.length === 0) {
    return undefined;
  }

  paths = [...route.parentsInfo.paths];
  paths = [...paths, [...route.paths]];

  if (route.childrenInfo) {
    const childrenPaths: string[] = [];
    // TODO: explain better why check only for pages
    // we only need pages since they have all the info of their parents,
    // and it's easier to map (only 1 parent is possible)
    route.childrenInfo
      .filter((ci) => ci.type === "Page")
      .forEach((ci) => {
        ci.paths.forEach((p) => {
          childrenPaths.push(p.join(""));
        });
      });

    paths = [...paths, childrenPaths];
  }

  return paths;
};
