import { RouteItem } from "../_Interfaces/RouteItem";
import { deepMapRoutes } from "./deepMapRoutes";
import { getRouteItemByKeys } from "./getRouteItem";

// TODO: comment below should be true
// This functions returns a deep copy.
export const createRoutes = <T extends Record<string, RouteItem>>(
  routes: T
): T => {
  const output = { ...routes };

  deepMapRoutes(output, (item, keys, indexes) => {
    // TODO: get item with 1 less key to create a deep copy
    let outputItem = getRouteItemByKeys(output, keys);

    if (outputItem) {
      // TODO: we need to set parent/childen path stuff
      if (outputItem.children) {
        outputItem.paths = [`wrapper modified by ${keys.join(",")}`];
      } else {
        outputItem.paths = [`route modified by ${keys.join(",")}`];
      }
    }
  });

  return output;
};
