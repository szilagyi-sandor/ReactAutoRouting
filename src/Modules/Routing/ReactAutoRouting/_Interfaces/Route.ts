export interface Route {
  // TODO: usage of any
  Component: React.ComponentType<any>;
  documentTitle?: string;
  // undefined or [] is the same as [""]
  paths?: string[];
  // TODO: authRule is missing
  authRule?: any;
  children?: Record<string, Route>;

  // Properties under this are added automatically by createRoutes function.
  // TODO: both should t be an array of objects with path and other props
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
  // TODO: authRule is missing here as well
  authRules: any;
}
