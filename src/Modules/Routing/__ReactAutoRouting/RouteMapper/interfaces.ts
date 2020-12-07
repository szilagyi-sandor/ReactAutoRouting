import { SuspenseProps } from "react";
import { AuthChecker } from "../_Interfaces/AuthChecker";
import { Route } from "../_Interfaces/Route";
import { UserInfo } from "../_Interfaces/UserInfo";

export interface RouteMapperProps {
  routes: Record<string, Route>;
  suspenseFallback: SuspenseProps["fallback"];
  userInfo: UserInfo;
  documentTitleFallback?: string;
  authChecker?: AuthChecker;
  restricted?: boolean;
}
