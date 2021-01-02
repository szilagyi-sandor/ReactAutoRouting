import { appColorsStorageName } from "Modules/Customization/_Constants/appColorsStorageName";

export const deleteAppColorsFromLocalStorage = () => {
  localStorage.removeItem(appColorsStorageName);
};
