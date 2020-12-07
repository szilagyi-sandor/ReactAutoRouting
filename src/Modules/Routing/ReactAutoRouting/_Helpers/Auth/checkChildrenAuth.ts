import { checkAuth } from "Modules/Routing/__ReactAutoRouting/_Helpers/checkAuth";
import { Route } from "../../_Interfaces/Route";
import { UserInfo } from "../../_Interfaces/UserInfo";
import { getNestedItem } from "../ItemGetters/getNestedItem";
import { findSiblingSelectors } from "../SelectorHandlers/findSiblingSelectors";

export const checkChildrenAuth = (
  routeObj: Record<string, Route>,
  selectors: string[][],
  currentSelectors: string[][],
  userInfo?: UserInfo
): boolean => {
  for (let i = 0; i < currentSelectors.length; i++) {
    const currentSelector = currentSelectors[i];

    const levelHasRestriction = findSiblingSelectors(
      selectors,
      currentSelector
    ).find((s) => s[s.length - 1] === "_restricted");

    if (levelHasRestriction) {
      return true;
    }

    const currentRoute = getNestedItem(routeObj, currentSelector);
    if (currentRoute) {
      if (
        currentRoute.authRule &&
        checkAuth(currentRoute.authRule, userInfo) === false
      ) {
        return false;
      }
    }
  }

  return true;
};
