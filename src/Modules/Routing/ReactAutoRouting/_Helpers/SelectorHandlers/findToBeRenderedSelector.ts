import { matchPath } from "react-router-dom";
import { Route } from "../../_Interfaces/Route";
import { getNestedItem } from "../ItemGetters/getNestedItem";
import { getAllRoutePaths } from "../PathHandlers/getAllRoutePaths";

export const findToBeRenderedSelector = (
  routeObj: Record<string, Route>,
  selectors: string[][],
  pathname: string
): string[] | undefined => {
  for (let i = 0; i < selectors.length; i++) {
    const selector = selectors[i];
    const route = getNestedItem(routeObj, selector);

    if (route) {
      const matched = !!matchPath(pathname, {
        path: getAllRoutePaths(routeObj, route),
        exact: true,
      });

      if (matched) {
        return selector;
      }
    }
  }

  // No matching route
  return undefined;
};
