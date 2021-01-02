import { RouteComponent } from "Modules/Routing/ReactAutoRouting/_Interfaces/Routes/RouteComponent";
import { lazyLayouts } from "Modules/Routing/_Constants/lazyLayouts";
import { lazyPages } from "Modules/Routing/_Constants/lazyPages";

export const getRouteComponent = (
  name: string,
  isLayout: boolean
): RouteComponent => {
  if (isLayout) {
    const layout = (lazyLayouts as Record<string, RouteComponent | undefined>)[
      name
    ];

    return layout ? layout : lazyLayouts.Helper;
  }

  const page = (lazyPages as Record<string, RouteComponent | undefined>)[name];

  return page ? page : lazyPages.Error;
};
