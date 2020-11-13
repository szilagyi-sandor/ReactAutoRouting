export interface RoutePage {
  documentTitle: string;
  paths: string[];
  // TODO: authRule is missing
  // authRule?: AuthRule;
  // TODO: usage of any? use empty object maybe, also test if this is useful
  Component: React.ComponentType<any>;
  // Added automatically by createRoutes function.
  parentPaths?: string[][];
  // This is a helper property to distinguish between ARPage and ARLayout.
  children?: never;
}
