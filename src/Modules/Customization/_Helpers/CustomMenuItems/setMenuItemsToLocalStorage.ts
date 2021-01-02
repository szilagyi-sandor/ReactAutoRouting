import { customMenuItemsStorageName } from "Modules/Customization/_Constants/customMenuItemsStorageName";
import { CustomMenuItems } from "Modules/Customization/_Interfaces/CustomMenuItems";

export const setMenuItemsToLocalStorage = (menuItems: CustomMenuItems) => {
  localStorage.setItem(customMenuItemsStorageName, JSON.stringify(menuItems));
};
