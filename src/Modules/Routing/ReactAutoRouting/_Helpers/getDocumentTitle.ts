import { Route } from "../_Interfaces/Route";
import { getNestedItemList } from "./ItemGetters/getNestedItemList";

export const getDocumentTitle = (
  routeObj: Record<string, Route>,
  route: Route,
  fallback = "Document"
): string => {
  let output = "";
  const { parentsInfo, documentTitle } = route;
  if (parentsInfo) {
    const parentRouteList = getNestedItemList(routeObj, parentsInfo.paths);
    if (!parentRouteList) {
      // We are returning undefined, if there's something wrong with the
      // current routes parent selectors.
      return fallback;
    }

    parentRouteList.forEach((r) => {
      if (r.documentTitle) {
        output += r.documentTitle;
      }
    });
  }

  if (documentTitle) {
    output += documentTitle;
  }

  return output ? output : fallback;
};
