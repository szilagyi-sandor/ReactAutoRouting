import { LayoutProps } from "./LayoutProps";
import { RoutePage } from "./RoutePage";

export interface RouteLayout {
  paths: string[];
  // TODO: authRule is missing
  // authRule?: AuthRule;
  children: Record<string, RoutePage>;
  Component: React.ComponentType<LayoutProps>;

  // Properties under this are added automatically by createRoutes function.
  childPaths?: string[][];
  parentPaths?: string[][];
}
