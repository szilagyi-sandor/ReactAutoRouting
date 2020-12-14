import { RouteAsProp } from "../Routes/RouteAsProp";

export interface PageProps {
  route: RouteAsProp;
  drilledProps?: Record<string, any>;
}
