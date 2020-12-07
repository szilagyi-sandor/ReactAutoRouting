import React from "react";

import { getDocumentTitle } from "../_Helpers/getDocumentTitle";
import { LayoutProps } from "../_Interfaces/LayoutProps";
import { RouteRendererProps } from "./interfaces";

export default function RouteRenderer({
  route,
  routeMapperProps,
  restricted,
}: RouteRendererProps) {
  let layoutProps: LayoutProps | undefined;
  const { routeObj, documentTitleFallback } = routeMapperProps;

  if (route.children) {
    layoutProps = {
      routeMapperProps: {
        ...routeMapperProps,
        currentRouteObj: route.children,
        showRestrictedPage: restricted,
      },
    };
  } else {
    if (restricted) {
      document.title = route.documentTitle ? route.documentTitle : "Restricted";
    } else {
      document.title = getDocumentTitle(routeObj, route, documentTitleFallback);
    }
  }

  return <route.Component {...layoutProps} />;
}
