export interface Route {
  // TODO: usage of any
  Component: React.ComponentType<any>;
  documentTitle?: string;
  // undefined or [] is filtered out when mapping to routes
  paths?: string[];
  // TODO: authRule is missing
  authRule?: any;
  children?: Record<string, Route>;

  // Properties under this are added automatically by createRoutes function.
  // TODO: both should t be an array of objects with path and other props
  parentsInfo?: ParentInfo;

  // TODO: rethink this comment after everything is done
  // It has the childrean pages 1 by 1 with all their paths started after current Route
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
  // TODO: authRule is missing here as well
  // Adding only the authRules that has to be handled by current Route
  authRules: any;
}
