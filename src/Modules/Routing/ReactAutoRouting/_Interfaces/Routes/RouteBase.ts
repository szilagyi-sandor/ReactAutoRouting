import { AuthRule } from "Modules/Routing/ReactAutoRouting/_Interfaces/Auth/AuthRule";
import { LazyExoticComponent } from "react";
import { LayoutProps } from "../PropHelpers/LayoutProps";
import { NestableObject } from "../Generic/NestableObject";
import { PageProps } from "../PropHelpers/PageProps";

// Having a routeBase gives more flexibility. Forexample It's useful,
// for a function that wants to remove Component Property on each Route.
export interface RouteBase<T> extends NestableObject<T> {
  Component: LazyExoticComponent<
    (props: LayoutProps | PageProps) => JSX.Element | null
  >;
  // Will be concatenated when the last Route in the chain
  // is rendered.
  documentTitle?: string;
  // If the paths are undefined or [] it will be filtered out, and will not
  // be rendered. Chilren and Parens Paths will be concatenated.
  paths?: string[];
  authRule?: AuthRule;
  // Properties under this will be added by processRoutes function.
  parentsInfo?: {
    selectors: string[][];
  };
  childrenInfo?: {
    selectors: string[][];
  };
}
