import { RouteMapperProps } from "../RouteMapper/interfaces";

// This will be extended by auth stuff, so it can be handled
// at component level.
export interface LayoutProps {
  routeMapperProps?: RouteMapperProps;
}
