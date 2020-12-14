import { deepMapNestedObject } from "Modules/Routing/ReactAutoRouting/_Helpers/Generic/deepMapNestedObject";
import { getNestedItem } from "Modules/Routing/ReactAutoRouting/_Helpers/ItemGetters/getNestedItem";
import { Route } from "Modules/Routing/ReactAutoRouting/_Interfaces/Routes/Route";
import { RoutePartial } from "Modules/Routing/ReactAutoRouting/_Interfaces/Routes/RoutePartial";

export const clearRouteProps = (routeObj: Record<string, Route>) => {
  const output: Record<string, RoutePartial> = { ...routeObj };

  deepMapNestedObject(output, (route, selector) => {
    const previousSelector = selector.slice(0, -1);
    const lastKey = selector[selector.length - 1];
    const previousItem: RoutePartial | undefined = getNestedItem(
      output,
      previousSelector
    );

    if (previousItem && previousItem.children) {
      const newRoute: RoutePartial = {
        ...route,
      };
      delete newRoute.Component;
      delete newRoute.childrenInfo;
      delete newRoute.parentsInfo;

      previousItem.children = {
        ...previousItem.children,
        [lastKey]: newRoute,
      };
    } else {
      // These are the first level objects.
      // The selector length should always be 1.
      const key = selector[0];
      const newRoute = {
        ...output[key],
      };

      delete newRoute.Component;
      delete newRoute.childrenInfo;
      delete newRoute.parentsInfo;

      output[key] = newRoute;
    }
  });

  return output;
};
