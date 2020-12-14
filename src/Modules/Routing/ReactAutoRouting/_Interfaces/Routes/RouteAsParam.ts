import { RouteBase } from "./RouteBase";

// Interface to create unprocessed routes. This should include all properties
// that are not auto calculated by processRoutes.
export interface RouteAsParam
  extends Pick<
    RouteBase<RouteAsParam>,
    "Component" | "documentTitle" | "paths" | "children" | "authRule"
  > {}
