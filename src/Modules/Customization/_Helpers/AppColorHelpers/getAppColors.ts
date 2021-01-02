import { appColorsStorageName } from "Modules/Customization/_Constants/appColorsStorageName";
import { AppColors } from "_Interfaces/AppColors";

export const getAppColors = (): AppColors | undefined => {
  const storedItem = localStorage.getItem(appColorsStorageName);

  if (storedItem) {
    try {
      return JSON.parse(storedItem);
    } catch (error) {
      return undefined;
    }
  }

  return undefined;
};
