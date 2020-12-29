import { User } from "Modules/Auth/_Interfaces/User";
import { AppColors } from "./AppColors";

export interface DrilledRouteProps {
  user?: User;
  setUser: (user: User | undefined) => void;
  appColors: AppColors;
  setAppColors: (appColors: AppColors) => void;
}
