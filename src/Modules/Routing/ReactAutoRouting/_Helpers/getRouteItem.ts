import { Route } from "../_Interfaces/Route";

// This function gives back the item by reference.
export const getRouteItem = (
  obj: Record<string, Route>,
  keys: string[]
): Route | undefined => {
  if (keys.length === 0) {
    return undefined;
  }

  let output: Route | undefined = obj[keys[0]];

  // We are skipping the first iteration, since we done it above.
  for (let i = 1; i < keys.length; i++) {
    const key = keys[i];

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
