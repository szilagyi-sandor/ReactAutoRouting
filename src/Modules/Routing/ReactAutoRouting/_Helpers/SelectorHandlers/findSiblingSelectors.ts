import { checkIfSelectorsAreSiblings } from "./checkIfSelectorsAreSiblings";

export const findSiblingSelectors = (
  selectors: string[][],
  child: string[],
  includeCurrent = true
): string[][] => {
  const output: string[][] = [];

  selectors.forEach((selector) => {
    if (checkIfSelectorsAreSiblings(selector, child, includeCurrent)) {
      output.push(selector);
    }
  });

  return output;
};
