import { HandledAuthTypes } from "../_Interfaces/HandledAuthTypes";

// Internally handled authRules are numbers, extra ones coming
// from outside are strings.
export const handledAuthTypes: HandledAuthTypes = {
  requiredLevel: 1,
  acceptedRoles: 2,
  excludedRoles: 3,
};
