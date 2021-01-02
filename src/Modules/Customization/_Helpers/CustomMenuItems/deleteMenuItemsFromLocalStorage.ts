import { customMenuItemsStorageName } from "Modules/Customization/_Constants/customMenuItemsStorageName";

export const deleteMenuItemsFromLocalStorage = () => {
  localStorage.removeItem(customMenuItemsStorageName);
};
