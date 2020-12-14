import { checkSelectorsSiblingRelation } from "./checkSelectorsSiblingRelation";

export const findSiblingSelectors = (
  allSelectors: string[][],
  selector: string[],
  includeCurrent = true
): string[][] => {
  const output: string[][] = [];

  allSelectors.forEach((currentSelector) => {
    if (
      checkSelectorsSiblingRelation(currentSelector, selector, includeCurrent)
    ) {
      output.push(currentSelector);
    }
  });

  return output;
};
