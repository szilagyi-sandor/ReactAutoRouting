import React from "react";

import { convertRouteToRouteAsParam } from "../_Helpers/RouteHandlers/convertRouteToRouteAsParam";
import { getDocumentTitle } from "../_Helpers/RouteHandlers/getDocumentTitle";
import { LayoutProps } from "../_Interfaces/PropHelpers/LayoutProps";
import { PageProps } from "../_Interfaces/PropHelpers/PageProps";
import { RouteRendererProps } from "./interfaces";

export default function RouteRenderer({
  route,
  routeMapperProps,
  restrictionCauser,
}: RouteRendererProps) {
  const routeToConvert = restrictionCauser ? restrictionCauser : route;

  if (route.children) {
    // This means we have a Layout, so we are creating a Layout property.
    const componentProps: LayoutProps = {
      route: convertRouteToRouteAsParam(routeToConvert),
      routeMapperProps: {
        ...routeMapperProps,
        currentRouteObj: route.children,
        restrictionCauser: restrictionCauser,
      },
    };

    return <route.Component {...componentProps} />;
  }

  // We have a Page, so we are creating a Page property and we are adding
  // the document title.
  const { routeObj, documentTitleFallback, drilledProps } = routeMapperProps;

  const componentProps: PageProps = {
    route: convertRouteToRouteAsParam(routeToConvert),
    drilledProps,
  };

  if (restrictionCauser) {
    document.title = route.documentTitle ? route.documentTitle : "Restricted";
  } else {
    document.title = getDocumentTitle(routeObj, route, documentTitleFallback);
  }

  return <route.Component {...componentProps} />;
}
