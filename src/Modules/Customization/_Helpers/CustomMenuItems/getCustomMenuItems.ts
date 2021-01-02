import { customMenuItemsStorageName } from "Modules/Customization/_Constants/customMenuItemsStorageName";

export const getCustomMenuItems = () => {
  const storedItem = localStorage.getItem(customMenuItemsStorageName);

  if (storedItem) {
    try {
      return JSON.parse(storedItem);
    } catch (error) {
      return undefined;
    }
  }

  return undefined;
};
