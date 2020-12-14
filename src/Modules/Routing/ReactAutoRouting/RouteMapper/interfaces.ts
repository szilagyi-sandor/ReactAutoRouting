import { SuspenseProps } from "react";
import { AuthChecker } from "../_Interfaces/Auth/AuthChecker";
import { Route } from "../_Interfaces/Routes/Route";
import { UserInfo } from "../_Interfaces/Auth/UserInfo";
export interface RouteMapperProps {
  routeObj: Record<string, Route>;
  currentRouteObj?: Record<string, Route>;
  suspenseFallback: SuspenseProps["fallback"];
  documentTitleFallback?: string;
  drilledProps?: Record<string, any>;
  // If this is false AutoMapper will not check authRules. If the value
  // is undefined it's treated as true.
  autoCheckRules?: boolean;
  autoCheckChildrenRoutes?: boolean;
  userInfo?: UserInfo;
  authChecker?: AuthChecker;
  // Helps _restricted routes to recieve proper RouteProp, and to show _restricted
  // routes, when it has no path and no siblings.
  restrictionCauser?: Route;
}
