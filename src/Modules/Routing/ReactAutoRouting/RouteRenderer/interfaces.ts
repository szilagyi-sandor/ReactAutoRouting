import { RouteMapperProps } from "../RouteMapper/interfaces";
import { Route } from "../_Interfaces/Routes/Route";

export interface RouteRendererProps {
  // The route to render.
  route: Route;
  // Props to calculate the route's LayoutProps or PageProps that will be passed on.
  routeMapperProps: RouteMapperProps;
  // If this is defined it will propagate downwards, the document title
  // will be just the last route's documentTitle and this will be used to
  // calculate the route information.
  restrictionCauser?: Route;
}
