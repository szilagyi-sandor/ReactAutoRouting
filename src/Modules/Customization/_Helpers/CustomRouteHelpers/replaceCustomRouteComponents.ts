import { StoredRoute } from "Modules/Customization/_Interfaces/StoredRoute";
import { deepMapNestedObject } from "Modules/Routing/ReactAutoRouting/_Helpers/Generic/deepMapNestedObject";
import { getNestedItem } from "Modules/Routing/ReactAutoRouting/_Helpers/ItemGetters/getNestedItem";
import { Route } from "Modules/Routing/ReactAutoRouting/_Interfaces/Routes/Route";
import { getRouteComponent } from "./getRouteComponent";

// TODO: Usage of any x2
export const replaceCustomRouteComponents = (
  customRoutes: Record<string, StoredRoute>
): Record<string, Route> => {
  const output: Record<string, Route> = { ...customRoutes } as any;

  deepMapNestedObject(output, (customRoute, selector) => {
    const previousSelector = selector.slice(0, -1);
    const lastKey = selector[selector.length - 1];
    const previousItem = getNestedItem(output, previousSelector);

    if (previousItem && previousItem.children) {
      previousItem.children = {
        ...previousItem.children,
        [lastKey]: {
          ...customRoute,
          Component: getRouteComponent(
            customRoute.Component as any,
            !!customRoute.children
          ),
        },
      };
    } else {
      // These are the first level objects.
      // The selector length should always be 1.
      const key = selector[0];
      const newRoute = {
        ...output[key],
        Component: getRouteComponent(
          output[key].Component as any,
          !!output[key].children
        ),
      };

      output[key] = newRoute;
    }
  });

  return output;
};
