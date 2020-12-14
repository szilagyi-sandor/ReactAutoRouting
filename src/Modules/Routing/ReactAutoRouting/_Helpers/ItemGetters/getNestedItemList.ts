import { NestableObject } from "../../_Interfaces/Generic/NestableObject";
import { getNestedItem } from "./getNestedItem";

// This function gives back all the items with reference.
export const getNestedItemList = <T extends NestableObject<T>>(
  obj: Record<string, T>,
  selectors: string[][]
): T[] | undefined => {
  if (selectors.length === 0) {
    return undefined;
  }

  const output: T[] = [];

  for (let i = 0; i < selectors.length; i++) {
    const selector = selectors[i];
    const route = getNestedItem(obj, selector);

    if (!route) {
      return undefined;
    }

    output.push(route);
  }

  return output;
};
