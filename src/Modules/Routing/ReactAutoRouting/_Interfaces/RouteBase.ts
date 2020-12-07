import { AuthRule } from "Modules/Routing/ReactAutoRouting/_Interfaces/AuthRule";
import { LazyExoticComponent } from "react";
import { LayoutProps } from "./LayoutProps";
import { NestableObject } from "./NestableObject";

// Having a routeBase gives more flexibility. Forexample It's useful,
// for a function that wants to remove Component Property on each Route.
export interface RouteBase<T> extends NestableObject<T> {
  Component: LazyExoticComponent<(props: LayoutProps | {}) => JSX.Element>;
  // Will be concatenated when the last Route in the chain
  // is rendered.
  documentTitle?: string;
  // If the paths is undefined or [] it will be filtered out,
  // and no Route will be rendered for that.
  paths?: string[];

  authRule?: AuthRule;
  restrictionHandler?: boolean;
  overRideParentHandler?: number;

  // Properties under this are added automatically by processRoute function.
  parentsInfo?: {
    // TODO: rename selectors
    paths: string[][];
  };
  childrenInfo?: {
    // TODO: rename selectors
    paths: string[][];
  };
}
