import { HandledAuthTypes } from "./HandledAuthTypes";

export type AuthRule =
  | RequiredLevelAuthRule
  | AcceptedRolesAuthRule
  | ExcludedRolesAuthRule
  | ExtraAuthRule;

// Rule for the minimal access level required. This assumes, higher Role has higher RoleValue.
export interface RequiredLevelAuthRule {
  type: HandledAuthTypes["requiredLevel"];
  level: number;
}

// Rule for which roles are accepted.
export interface AcceptedRolesAuthRule {
  type: HandledAuthTypes["acceptedRoles"];
  roles: number[];
}

// Rule for which roles are not accepted.
export interface ExcludedRolesAuthRule {
  type: HandledAuthTypes["excludedRoles"];
  roles: number[];
}

export interface ExcludedRolesAuthRule {
  type: HandledAuthTypes["excludedRoles"];
  roles: number[];
}

export interface ExtraAuthRule {
  type: string;
  args: any;
}
