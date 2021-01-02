import { LazyExoticComponent } from "react";
import { LayoutProps } from "../PropHelpers/LayoutProps";
import { PageProps } from "../PropHelpers/PageProps";

export type RouteComponent = LazyExoticComponent<
  (props: LayoutProps | PageProps) => JSX.Element | null
>;
