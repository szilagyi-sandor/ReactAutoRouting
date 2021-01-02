import { NestableObject } from "../../_Interfaces/Generic/NestableObject";

export const deepMapNestedObject = <T extends NestableObject<T>>(
  obj: Record<string, T>,
  mapperFunc: (item: T, selector: string[], indexes: number[]) => void,
  prevSelector: string[] = [],
  prevIndexes: number[] = []
) => {
  Object.keys(obj).forEach((key, index) => {
    const item = obj[key];
    const currentSelector = [...prevSelector, key];
    const currentIndexes = [...prevIndexes, index];

    mapperFunc(item, currentSelector, currentIndexes);

    if (item.children && typeof item.children === "object") {
      deepMapNestedObject(
        item.children,
        mapperFunc,
        currentSelector,
        currentIndexes
      );
    }
  });
};
