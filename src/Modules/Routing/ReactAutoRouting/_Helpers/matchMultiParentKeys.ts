import { matchParentKeys } from "./matchParentKeys";

export const matchMultiParentKeys = (
  parentKeysArr: string[][],
  itemKeys: string[]
) => {
  for (let i = 0; i < parentKeysArr.length; i++) {
    if (!matchParentKeys(parentKeysArr[i], itemKeys)) {
      return false;
    }
  }

  return true;
};
