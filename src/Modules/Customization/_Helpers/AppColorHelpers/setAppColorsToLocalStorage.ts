import { appColorsStorageName } from "Modules/Customization/_Constants/appColorsStorageName";
import { AppColors } from "Modules/Customization/_Interfaces/AppColors";

export const setAppColorsToLocalStorage = (appColors: AppColors) => {
  localStorage.setItem(appColorsStorageName, JSON.stringify(appColors));
};
