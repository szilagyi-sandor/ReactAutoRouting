import { Route } from "../../_Interfaces/Routes/Route";
import { UserInfo } from "../../_Interfaces/Auth/UserInfo";
import { getNestedItem } from "../ItemGetters/getNestedItem";
import { findSiblingSelectors } from "../SelectorHandlers/findSiblingSelectors";
import { checkAuth } from "./authCheckers";
import { AuthChecker } from "../../_Interfaces/Auth/AuthChecker";

// The allSelector parameter is needed to check which level has
// no _restricted item.
export const checkChildrenAuth = (
  routeObj: Record<string, Route>,
  allSelectors: string[][],
  selectorsToCheck: string[][],
  userInfo?: UserInfo,
  authChecker?: AuthChecker
): boolean => {
  const _checkAuth = authChecker ? authChecker : checkAuth;
  for (let i = 0; i < selectorsToCheck.length; i++) {
    const selectorToCheck = selectorsToCheck[i];

    const levelHasRestriction = findSiblingSelectors(
      allSelectors,
      selectorToCheck
    ).find((s) => s[s.length - 1] === "_restricted");

    if (levelHasRestriction) {
      return true;
    }

    const currentRoute = getNestedItem(routeObj, selectorToCheck);
    if (
      currentRoute &&
      currentRoute.authRule &&
      _checkAuth(currentRoute.authRule, userInfo) === false
    ) {
      return false;
    }
  }

  return true;
};
