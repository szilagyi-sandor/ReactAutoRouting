import { EnumItem } from "_Interfaces/EnumItem";
import { EnumObj } from "_Interfaces/EnumObj";

export const getEnumObjById = (
  enumObj: EnumObj,
  id: number
): EnumItem | undefined => {
  const keys = Object.keys(enumObj);

  for (let i = 0; i < keys.length; i++) {
    const item = enumObj[keys[i]];

    if (item && item.id === id) {
      return item;
    }
  }

  return undefined;
};
