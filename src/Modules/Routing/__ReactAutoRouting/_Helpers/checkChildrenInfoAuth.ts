import { matchPath } from "react-router-dom";
import { AuthChecker } from "../_Interfaces/AuthChecker";

import { Route } from "../_Interfaces/Route";
import { UserInfo } from "../_Interfaces/UserInfo";
import { checkAuth } from "./checkAuth";
import { getCombinations } from "./combinations";

// TODO: AuthChecker interface
// TODO: if it's extended has to be called from outside
export const checkChildrenInfoAuth = (
  route: Route,
  pathname: string,
  userInfo: UserInfo,
  authChecker?: AuthChecker
) => {
  // this shouldn't happen, but better check
  if (!route.paths) {
    return false;
  }

  if (route.childrenInfo) {
    for (let i = 0; i < route.childrenInfo.length; i++) {
      const child = route.childrenInfo[i];

      if (child.authRule) {
        // TODO: optimize?
        // TODO: Create a clearer way maybe with helper functions to handle this
        // TODO: getAllChildPath
        // route.paths should never be undefined
        let childPaths: string[];
        if (child.type === "Page") {
          childPaths = getCombinations([
            [...route.paths],
            child.paths.map((p) => p.join("")),
          ]).map((p) => p.join(""));
        } else {
          // TODO: handle child path for layouts from childProps
          childPaths = [""];
        }

        const childMatch = !!matchPath(pathname, {
          path: childPaths,
          exact: true,
        });

        if (childMatch) {
          const validation = authChecker
            ? authChecker(child.authRule, userInfo)
            : checkAuth(child.authRule, userInfo);

          return validation;
        }
      }
    }
  }

  return true;
};
