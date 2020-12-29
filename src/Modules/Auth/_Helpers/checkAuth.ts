import { checkAuth as defaultCheckAuth } from "Modules/Routing/ReactAutoRouting/_Helpers/Auth/authCheckers";
import { AuthRule } from "Modules/Routing/ReactAutoRouting/_Interfaces/Auth/AuthRule";
import { UserInfo } from "Modules/Routing/ReactAutoRouting/_Interfaces/Auth/UserInfo";

export const checkAuth = (rule: AuthRule, userInfo?: UserInfo): boolean => {
  switch (rule.type) {
    case "customRule":
      // Example of expanding the checker function.
      return true;

    default:
      return defaultCheckAuth(rule, userInfo);
  }
};
