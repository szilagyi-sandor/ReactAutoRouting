import { appColorsStorageName } from "_Constants/appColorsStorageName";
import { defaultAppColors } from "_Constants/defaultAppColors";
import { AppColors } from "_Interfaces/AppColors";

export const getAppColors = (): AppColors => {
  const storedItem = localStorage.getItem(appColorsStorageName);

  if (storedItem) {
    return JSON.parse(storedItem);
  }

  return defaultAppColors;
};
