import { handledAuthTypes } from "../_Constants/handledAuthTypes";
import {
  AuthRule,
  RequiredLevelAuthRule,
  AcceptedRolesAuthRule,
  ExcludedRolesAuthRule,
} from "../_Interfaces/AuthRule";
import { UserInfo } from "../_Interfaces/UserInfo";

// TODO: this should be dynamically extendable, like checking UserId to the current
// one in the route
export function checkAuth(rule: AuthRule, userInfo: UserInfo) {
  switch (rule.type) {
    case handledAuthTypes.requiredLevel:
      return checkRequiredAuthLevel(rule, userInfo);

    case handledAuthTypes.acceptedRoles:
      return checkAcceptedRoles(rule, userInfo);

    case handledAuthTypes.excludedRoles:
      return checkExludedRoles(rule, userInfo);

    default:
      return false;
  }
}

function checkRequiredAuthLevel(
  rule: RequiredLevelAuthRule,
  userInfo: UserInfo
) {
  return userInfo.role >= rule.level;
}

function checkAcceptedRoles(rule: AcceptedRolesAuthRule, userInfo: UserInfo) {
  return rule.roles.includes(userInfo.role);
}

function checkExludedRoles(rule: ExcludedRolesAuthRule, userInfo: UserInfo) {
  return !rule.roles.includes(userInfo.role);
}
