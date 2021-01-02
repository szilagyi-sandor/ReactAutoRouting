import { User } from "Modules/Auth/_Interfaces/User";
import { CustomMenuItems } from "Modules/Customization/_Interfaces/CustomMenuItems";
import { Route } from "Modules/Routing/ReactAutoRouting/_Interfaces/Routes/Route";
import { AppColors } from "../Modules/Customization/_Interfaces/AppColors";

export interface DrilledRouteProps {
  user?: User;
  setUser: (user: User | undefined) => void;
  appColors: AppColors;
  setAppColors: (appColors: AppColors) => void;
  routes: Record<string, Route>;
  setRoutes: (routes: Record<string, Route>) => void;
  menuItems: CustomMenuItems;
  setMenuItems: (menuItems: CustomMenuItems) => void;
}
