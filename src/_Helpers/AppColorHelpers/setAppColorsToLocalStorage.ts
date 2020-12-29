import { appColorsStorageName } from "_Constants/appColorsStorageName";
import { AppColors } from "_Interfaces/AppColors";

export const setAppColorsToLocalStorage = (appColors: AppColors) => {
  localStorage.setItem(appColorsStorageName, JSON.stringify(appColors));
};
