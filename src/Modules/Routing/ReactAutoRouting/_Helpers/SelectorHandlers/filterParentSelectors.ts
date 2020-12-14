import { checkIfSelectorIsParent } from "./checkIfSelectorIsParent";
import { checkSelectorsParentChildRelation } from "./checkSelectorsParentChildRelation";

// Filters out the selectors that has children. If the items array is ordered properly,
// there's no need to check each item against the others, it's enough to check against
// the next one in the order.
export const filterParentSelectors = (
  selectors: string[][],
  fullCheck = false
): string[][] => {
  const output: string[][] = [];

  selectors.forEach((selector, i) => {
    if (fullCheck) {
      if (!checkIfSelectorIsParent(selector, selectors)) {
        output.push(selector);
      }
    } else {
      const possibleChild = selectors[i + 1];
      if (
        !possibleChild ||
        !checkSelectorsParentChildRelation(selector, possibleChild)
      ) {
        output.push(selector);
      }
    }
  });

  return output;
};
