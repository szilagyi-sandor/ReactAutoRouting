import { handledAuthTypes } from "../../_Constants/handledAuthTypes";
import { AuthRule } from "../../_Interfaces/Auth/AuthRule";

export const handleAuthMessage = (
  rule?: AuthRule,
  fallback?: string
): string => {
  const _fallback = fallback
    ? fallback
    : "You do not have access to the requested resource.";

  if (!rule) {
    return _fallback;
  }

  switch (rule.type) {
    case handledAuthTypes.requiredLevel:
      return "Your current role does not have access to the requested resource.";

    case handledAuthTypes.acceptedRoles:
      return "Your current role is not accepted for the requested resource";

    case handledAuthTypes.excludedRoles:
      return "Your current role is not accepted for the requested resource";

    default:
      return _fallback;
  }
};
