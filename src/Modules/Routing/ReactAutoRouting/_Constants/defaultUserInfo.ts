import { UserInfo } from "../_Interfaces/Auth/UserInfo";

// Even if there is no current user, we use a default object, so the checks
// are easier.
export const defaultUserInfo: UserInfo = {
  id: 0,
  role: 0,
};
