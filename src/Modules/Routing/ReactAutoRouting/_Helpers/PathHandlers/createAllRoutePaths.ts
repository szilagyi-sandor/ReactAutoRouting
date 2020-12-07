import { Route } from "../../_Interfaces/Route";
import { getCombinations } from "../combinations";
import { getNestedItemList } from "../ItemGetters/getNestedItemList";
import { filterParentSelectors } from "../SelectorHandlers/filterParentSelectors";
import { getAllSelectorsFromSelector } from "../SelectorHandlers/getAllSelectorsFromSelector";
import { createPathsFromRouteList } from "./createPathsFromRouteList";

export const createAllRoutePaths = (
  routeObj: Record<string, Route>,
  route: Route
): string[][] | undefined => {
  let output: string[][] | undefined = [];

  const { paths, parentsInfo, childrenInfo, children } = route;

  // Routes without any given paths are filtered out.
  if (!paths || paths.length === 0) {
    return undefined;
  }

  // Taking care of parent routes
  if (parentsInfo) {
    const parentRouteList = getNestedItemList(routeObj, parentsInfo.paths);

    if (!parentRouteList) {
      // We are returning undefined, if there's something wrong with the
      // current routes parent selectors.
      return undefined;
    }

    output = createPathsFromRouteList(parentRouteList);

    if (!output) {
      // output being undefined means that a parent item has no paths, which means this
      // should be filtered too.
      return undefined;
    }
  }

  // Adding the current route path.
  output.push(paths);

  // Taking care of children
  if (childrenInfo && children) {
    // Children's has to be combined (to only combine paths with the correct parents),
    // and also we only need the routes without children.
    const combinedChildrenPaths: string[] = [];
    const pageSelectors = filterParentSelectors(childrenInfo.paths);

    for (let i = 0; i < pageSelectors.length; i++) {
      const pageSelector = pageSelectors[i];

      const pageSelectorParts = getAllSelectorsFromSelector(pageSelector);
      const childRouteList = getNestedItemList(children, pageSelectorParts);

      if (!childRouteList) {
        // We are returning undefined, if there's something wrong with the
        // current routes child selectors.
        return undefined;
      }

      const childPaths = createPathsFromRouteList(childRouteList);

      if (childPaths) {
        getCombinations(childPaths).forEach((paths) =>
          combinedChildrenPaths.push(paths.join(""))
        );
      }
    }

    output.push(combinedChildrenPaths);
  }

  return output;
};
