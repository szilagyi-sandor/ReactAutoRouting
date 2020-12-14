import { Route } from "../../_Interfaces/Routes/Route";
import { getNestedItemList } from "../ItemGetters/getNestedItemList";

export const getDocumentTitle = (
  routeObj: Record<string, Route>,
  route: Route,
  fallback = "Document"
): string => {
  let output = "";
  const { parentsInfo, documentTitle } = route;

  if (parentsInfo) {
    const parentRouteList = getNestedItemList(routeObj, parentsInfo.selectors);
    if (!parentRouteList) {
      // We are returning the fallback, if there's something wrong with the
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
