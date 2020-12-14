import { AuthRule } from "./AuthRule";
import { UserInfo } from "./UserInfo";

export interface AuthChecker {
  (rule: AuthRule, userInfo?: UserInfo): boolean;
}
