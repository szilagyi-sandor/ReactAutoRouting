import React from "react";

import { LayoutProps } from "../_Interfaces/PropHelpers/LayoutProps";
import RouteMapper from "../RouteMapper/RouteMapper";

export default function HelperLayout({ routeMapperProps }: LayoutProps) {
  return routeMapperProps ? <RouteMapper {...routeMapperProps} /> : null;
}
