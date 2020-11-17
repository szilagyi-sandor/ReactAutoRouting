import { Route } from "../_Interfaces/Route";
import { getCombinations } from "./combinations";
import { deepMapRoutes } from "./deepMapRoutes";
import { getRouteItem } from "./getRouteItem";

export const processRoutes = <T extends Record<string, Route>>(
  routes: T
): T => {
  const output: T = { ...routes };

  deepMapRoutes(output, (item, keys, indexes) => {
    // TODO: delete
    // console.log(item, "item");
    // console.log(keys, "keys");
    // console.log(indexes, "indexes");
    // console.log("--------------------------------------");

    if (keys.length === 1) {
      // TODO: Try to avoid casting by creating a generic deepObjectMapper.

      // The deepMapRoutes function is returning keys as string and item as
      // Route, but to keep the input object properties and intellisense we are using
      // the generic extend trick and because of that the type Route is not enough for
      // the output.
      const modKey: keyof T = keys[0];
      output[modKey] = {
        ...(item as T[keyof T]),
        childrenInfo: item.children ? [] : undefined,
      };
    } else {
      const parentKeys = keys.slice(0, -1);
      const lastKey = keys[keys.length - 1];
      // We will take the previous item so we can take its data and it's
      // also used to enable creating deep copies without modifying the input.
      const previousItem = getRouteItem(output, parentKeys);

      // This should always be true, but better check
      if (previousItem && previousItem.children) {
        // Getting previous document titles
        const documentTitles: string[] = [
          ...(previousItem.parentsInfo
            ? previousItem.parentsInfo.documentTitles
            : []),
          previousItem.documentTitle ? previousItem.documentTitle : "",
        ];

        // Getting previous parent paths
        const parentPaths: string[][] = [
          ...(previousItem.parentsInfo
            ? previousItem.parentsInfo.paths.map((p) => [...p])
            : []),
          ...(previousItem.paths ? [[...previousItem.paths]] : [[""]]),
        ];

        // Setting curent item's data
        previousItem.children = {
          ...previousItem.children,
          [lastKey]: {
            ...item,
            parentsInfo: {
              documentTitles,
              paths: parentPaths,
            },
            childrenInfo: item.children ? [] : undefined,
          },
        };

        // If it's a page-route(not a parent) we are looping through all
        // its parents to set their data.
        if (!item.children) {
          parentKeys.forEach((pk, index) => {
            let parentItem: Route | undefined;
            if (index === parentKeys.length - 1) {
              // We already took the first parent, so let's use it here
              parentItem = previousItem;
            } else {
              parentItem = getRouteItem(output, keys.slice(0, index + 1));
            }

            // This should always be true, but better check
            if (parentItem && parentItem.childrenInfo) {
              // this might be a bit confusing, we these are the children
              // to the curentParent, based on currentItemParents.
              const childrenPaths = [
                ...parentPaths.slice(index + 1),
                ...(item.paths && item.paths.length > 0
                  ? [item.paths]
                  : [[""]]),
              ];
              const combinations = getCombinations(childrenPaths);

              parentItem.childrenInfo = [
                ...parentItem.childrenInfo,
                {
                  paths: combinations,
                  authRules: {} as any,
                },
              ];
            }
          });
        }
      }
    }
  });

  return output;
};
