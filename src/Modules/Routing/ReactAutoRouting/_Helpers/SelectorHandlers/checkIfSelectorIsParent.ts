import { checkSelectorsParentChildRelation } from "./checkSelectorsParentChildRelation";

export const checkIfSelectorIsParent = (
  selector: string[],
  allSelectors: string[][]
): boolean => {
  // All selectors must have the current selector and at least 1 more.
  if (allSelectors.length < 2) {
    return false;
  }

  for (let i = 0; i < allSelectors.length; i++) {
    const possibleChild = allSelectors[i];
    if (
      checkSelectorsParentChildRelation(selector, possibleChild) &&
      possibleChild.length > selector.length
    ) {
      return true;
    }
  }

  return false;
};
