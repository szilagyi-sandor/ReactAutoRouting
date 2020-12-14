import { NestableObject } from "../../_Interfaces/Generic/NestableObject";

// This function gives back the item by reference.
export const getNestedItem = <T extends NestableObject<T>>(
  obj: Record<string, T>,
  selector: string[]
): T | undefined => {
  if (selector.length === 0) {
    return undefined;
  }

  let output: T | undefined = obj[selector[0]];

  // We are skipping the first iteration, since we done it above.
  for (let i = 1; i < selector.length; i++) {
    const key = selector[i];

    if (output && output.children) {
      output = output.children[key];
    } else {
      // Either the output is undefined, so the keys given are not valid,
      // or the output has no children left, but we still have key/keys to try.
      // In both cases we return undefined.
      return undefined;
    }
  }

  return output;
};
