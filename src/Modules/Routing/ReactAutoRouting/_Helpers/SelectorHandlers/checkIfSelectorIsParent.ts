import { checkSelectorsRelation } from "./checkSelectorsRelation";

export const checkIfSelectorIsParent = (
  selector: string[],
  allSelectors: string[][]
): boolean => {
  // all selectors must have the current selector
  if (allSelectors.length < 2) {
    return false;
  }

  for (let i = 0; i < allSelectors.length; i++) {
    const possibleChild = allSelectors[i];
    if (
      checkSelectorsRelation(selector, possibleChild) &&
      possibleChild.length > selector.length
    ) {
      return true;
    }
  }

  return false;
};
