import { RouteMapperProps } from "../RouteMapper/interfaces";
import { Route } from "../_Interfaces/Route";

export interface RouteRendererProps {
  routeMapperProps: RouteMapperProps;
  route: Route;
  restricted: boolean;
}
