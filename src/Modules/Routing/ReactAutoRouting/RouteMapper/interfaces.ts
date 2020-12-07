import { SuspenseProps } from "react";
import { AuthChecker } from "../_Interfaces/AuthChecker";
import { Route } from "../_Interfaces/Route";
import { UserInfo } from "../_Interfaces/UserInfo";
export interface RouteMapperProps {
  routeObj: Record<string, Route>;
  currentRouteObj?: Record<string, Route>;
  suspenseFallback: SuspenseProps["fallback"];
  documentTitleFallback?: string;
  userInfo?: UserInfo;
  // TODO: create example authChecker
  authChecker?: AuthChecker;
  showRestrictedPage?: boolean;
}
