import { AuthRule } from "./AuthRule";

export interface Route {
  // TODO: usage of any
  Component: React.ComponentType<any>;
  documentTitle?: string;
  // undefined or [] is filtered out when mapping to routes
  paths?: string[];
  authRule?: AuthRule;
  children?: Record<string, Route>;

  // Properties under this are added automatically by createRoutes function.
  parentsInfo?: ParentInfo;
  childrenInfo?: ChildrenInfo[];
}

// Helper interface
interface ParentInfo {
  paths: string[][];
  documentTitles: string[];
}

// Helper interface
interface ChildrenInfo {
  paths: string[][];
  // Adding only the authRules that has to be handled by current Route
  authRule?: AuthRule;
  // TODO: create an anum for this?
  type: "Layout" | "Page";
}
