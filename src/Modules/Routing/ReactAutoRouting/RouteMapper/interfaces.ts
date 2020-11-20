import { SuspenseProps } from "react";
import { Route } from "../_Interfaces/Route";

export interface RouteMapperProps {
  routes: Record<string, Route>;
  suspenseFallback: SuspenseProps["fallback"];
  documentTitleFallback?: string;
  // TODO: add later (create a basic one which can be replaced)
  // authChecker: (authRule) => boolean;
}
