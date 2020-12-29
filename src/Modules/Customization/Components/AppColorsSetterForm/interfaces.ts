import { AppColors } from "_Interfaces/AppColors";

export interface AppColorsSetterFormProps {
  appColors: AppColors;
  setAppColors: (appColors: AppColors) => void;
}
