import { defaultUserInfo } from "../../_Constants/defaultUserInfo";
import { handledAuthTypes } from "../../_Constants/handledAuthTypes";
import {
  AuthRule,
  RequiredLevelAR,
  AcceptedRolesAR,
  ExcludedRolesAR,
} from "../../_Interfaces/Auth/AuthRule";
import { UserInfo } from "../../_Interfaces/Auth/UserInfo";

export function checkAuth(rule: AuthRule, userInfo?: UserInfo) {
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
  rule: RequiredLevelAR,
  userInfo: UserInfo = defaultUserInfo
) {
  return userInfo.role >= rule.level;
}

function checkAcceptedRoles(
  rule: AcceptedRolesAR,
  userInfo: UserInfo = defaultUserInfo
) {
  return rule.roles.includes(userInfo.role);
}

function checkExludedRoles(
  rule: ExcludedRolesAR,
  userInfo: UserInfo = defaultUserInfo
) {
  return !rule.roles.includes(userInfo.role);
}
