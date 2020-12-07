import { Route } from "../_Interfaces/Route";

import { getAllSelectorsFromSelector } from "./SelectorHandlers/getAllSelectorsFromSelector";
import { deepMapNestedObject } from "./deepMapNestedObject";
import { getNestedItem } from "./ItemGetters/getNestedItem";

export const processRoutes = <T extends Record<string, Route>>(
  routeObj: T
): T => {
  const output: T = { ...routeObj };

  deepMapNestedObject(output, (route, selector) => {
    // We are taking the previous item to enable creating deep copies without
    // modifying the input.
    const previousSelector = selector.slice(0, -1);
    const lastKey = selector[selector.length - 1];
    const previousItem = getNestedItem(output, previousSelector);

    if (previousItem && previousItem.children) {
      const parentSelectors = getAllSelectorsFromSelector(previousSelector);

      // Setting curent item's parentsInfo.
      previousItem.children = {
        ...previousItem.children,
        [lastKey]: {
          ...route,
          parentsInfo: {
            paths: parentSelectors,
          },
        },
      };

      // Looping through all parents to complement their childrenInfo.
      parentSelectors.forEach((parentSelector, index) => {
        let parentItem: Route | undefined;

        if (index === parentSelectors.length - 1) {
          // We already took the first parent, so let's use it here
          parentItem = previousItem;
        } else {
          parentItem = getNestedItem(output, parentSelector);
        }

        // This should always be true, but better check.
        if (parentItem && parentItem.children) {
          parentItem.childrenInfo = {
            paths: [
              ...(parentItem.childrenInfo ? parentItem.childrenInfo.paths : []),
              selector.slice(parentSelector.length),
            ],
          };
        }
      });
    }
  });

  return output;
};
