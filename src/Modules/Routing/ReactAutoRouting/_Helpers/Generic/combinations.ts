export const getCombinations = <T>(arrOfArrs: T[][]): T[][] => {
  // Taking care of empty param.
  if (arrOfArrs.length === 0) {
    return [];
  }

  // Removing empty items.
  const _arrOfArrs = arrOfArrs.filter((a) => a.length > 0);

  const output: T[][] = [];
  const length = _arrOfArrs.length;
  const maxValues = _arrOfArrs.map((a) => a.length - 1);

  // The first combination.
  let firstOdometerItem: number[] = Array(length).fill(0);
  output.push(translateOdometerItem(arrOfArrs, firstOdometerItem));

  // Getting the next combination or if there's no more a false value.
  let nextOdometerItem = getNextOdometerItem(firstOdometerItem, maxValues);
  while (nextOdometerItem) {
    output.push(translateOdometerItem(arrOfArrs, nextOdometerItem));
    nextOdometerItem = getNextOdometerItem(nextOdometerItem, maxValues);
  }

  return output;
};

export const getNextOdometerItem = (
  currentOdometerItem: number[],
  maxValues: number[]
): number[] | false => {
  for (let i = 0; i < currentOdometerItem.length; i++) {
    const value = currentOdometerItem[i];

    if (value < maxValues[i]) {
      const nextCombination = currentOdometerItem.map((cValue, cIndex) => {
        if (cIndex < i) {
          return 0;
        }

        if (cIndex === i) {
          return cValue + 1;
        }

        return cValue;
      });

      return nextCombination;
    }
  }

  return false;
};

const translateOdometerItem = <T>(
  arrOfArrs: T[][],
  odometerItem: number[]
): T[] => {
  return odometerItem.map((value, index) => arrOfArrs[index][value]);
};
