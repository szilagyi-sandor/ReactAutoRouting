import { AppColors } from "Modules/Customization/_Interfaces/AppColors";

export interface AppColorsSetterFormProps {
  appColors: AppColors;
  setAppColors: (appColors: AppColors | undefined) => void;
}
