import { Route } from "../_Interfaces/Route";
import { getCombinations } from "./combinations";
import { deepMapRoutes } from "./deepMapRoutes";
import { getRouteItem } from "./getRouteItem";
import { matchMultiParentKeys } from "./matchMultiParentKeys";

export const processRoutes = <T extends Record<string, Route>>(
  routes: T
): T => {
  const output: T = { ...routes };
  // The keys of the items without a route or with a filtered parent
  // will be stored here.
  const filteredItems: string[][] = [];

  deepMapRoutes(output, (item, keys) => {
    const parentKeys = keys.slice(0, -1);
    const lastKey = keys[keys.length - 1];
    // We will take the previous item so we can take its data and it's
    // also used to enable creating deep copies without modifying the input.
    const previousItem = getRouteItem(output, parentKeys);

    const hasFilteredParent =
      filteredItems.length > 0 && matchMultiParentKeys(filteredItems, keys);
    const isFiltered =
      hasFilteredParent || !item.paths || item.paths.length === 0;

    if (isFiltered && !hasFilteredParent) {
      filteredItems.push(keys);
    }

    if (previousItem && previousItem.children) {
      if (!isFiltered) {
        // Checking if current item has a restricted sibling.
        const hasRestrictedSibling = !!previousItem.children._restricted;
        // Getting previous document titles.
        console.log(previousItem);
        const documentTitles: string[] = [
          ...(previousItem.parentsInfo
            ? previousItem.parentsInfo.documentTitles
            : []),
          previousItem.documentTitle ? previousItem.documentTitle : "",
        ];
        // Getting previous parent paths.
        const parentPaths: string[][] = [
          ...(previousItem.parentsInfo
            ? previousItem.parentsInfo.paths.map((p) => [...p])
            : []),
          // previousItem.paths cannot be undefined, because if the previous item has no
          // path then this item is filtered too by the hasFilteredParent check.
          [...previousItem.paths!],
        ];

        // Setting curent item's data.
        previousItem.children = {
          ...previousItem.children,
          [lastKey]: {
            ...item,
            parentsInfo: {
              documentTitles,
              paths: parentPaths,
            },
          },
        };

        // If it's a page-route(has no children) and it's not filtered we are looping
        // through all its parents to complement their data.
        if (!item.children) {
          // We need to identify which parent should show its own restrictedSibling,
          // if the current item has none.
          let restrictedHandleSelector: string[] = [];

          parentKeys.forEach((_, index) => {
            const parentSelector = keys.slice(0, index + 1);
            let parentItem: Route | undefined;

            if (index === parentKeys.length - 1) {
              // We already took the first parent, so let's use it here
              parentItem = previousItem;
            } else {
              parentItem = getRouteItem(output, parentSelector);
            }

            // This should always be true, but better check.
            if (parentItem && parentItem.children) {
              if (index === 0 || parentItem.children._restricted) {
                restrictedHandleSelector = parentSelector;
              }

              // this might be a bit confusing, we these are the children
              // to the curentParent, based on currentItemParents.
              // TODO: item.paths will mean it should be filtered out
              const childrenPaths = [
                ...parentPaths.slice(index + 1),
                // Item should always has a path, otherwise it's filtered
                [...item.paths!],
              ];
              const combinations = getCombinations(childrenPaths);

              parentItem.childrenInfo = [
                ...(parentItem.childrenInfo ? parentItem.childrenInfo : []),
                {
                  paths: combinations,
                  authRules: {} as any,
                },
              ];
            }
          });

          // Setting the authRule based on the restrictedHandleSelector, if it's necessary.
          if (!hasRestrictedSibling && restrictedHandleSelector) {
            const restrictedHandlerItem = getRouteItem(
              output,
              restrictedHandleSelector
            );

            if (restrictedHandlerItem && restrictedHandlerItem.childrenInfo) {
              const resChildrenInfo = restrictedHandlerItem.childrenInfo;
              resChildrenInfo[resChildrenInfo.length - 1].authRules =
                "HANDLE THIS";
            }
          }
        }
      } else {
        // Not setting anything on this item, since it will be filtered out.
        previousItem.children = {
          ...previousItem.children,
          [lastKey]: { ...item },
        };
      }
    } else {
      // Here we handle the first level items, since they does not have previousItem.
      // Setting parentInfo to empty array to differentiate between filtered and normal routes.
      const modKey: keyof T = keys[0];
      output[modKey] = {
        ...output[modKey],
        parentsInfo: {
          paths: [],
          documentTitles: [],
        },
      };
    }
  });

  return output;
};
