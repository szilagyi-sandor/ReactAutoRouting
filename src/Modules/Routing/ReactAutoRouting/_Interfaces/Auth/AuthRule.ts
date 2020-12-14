import { HandledAuthTypes } from "./HandledAuthTypes";

// This is extendable from outside.
export type AuthRule =
  | RequiredLevelAR
  | AcceptedRolesAR
  | ExcludedRolesAR
  | AdditionalAR;

export interface RequiredLevelAR {
  type: HandledAuthTypes["requiredLevel"];
  level: number;
}

export interface AcceptedRolesAR {
  type: HandledAuthTypes["acceptedRoles"];
  roles: number[];
}

export interface ExcludedRolesAR {
  type: HandledAuthTypes["excludedRoles"];
  roles: number[];
}

export interface AdditionalAR {
  type: string;
  args: any;
}
