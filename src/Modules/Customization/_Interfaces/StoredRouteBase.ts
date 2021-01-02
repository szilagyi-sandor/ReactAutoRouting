import { AuthRule } from "Modules/Routing/ReactAutoRouting/_Interfaces/Auth/AuthRule";
import { NestableObject } from "Modules/Routing/ReactAutoRouting/_Interfaces/Generic/NestableObject";

export interface StoredRouteBase<T> extends NestableObject<T> {
  Component: string;
  documentTitle?: string;
  paths?: string[];
  authRule?: AuthRule;
}
