import { RouteBase } from "./RouteBase";

// The interface pages and layouts recieve.
export interface RouteAsProp
  extends Pick<
    RouteBase<RouteAsProp>,
    "documentTitle" | "paths" | "authRule" | "childrenInfo" | "parentsInfo"
  > {}
