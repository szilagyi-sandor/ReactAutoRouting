import { User } from "Modules/Auth/_Interfaces/User";

export interface DrilledRouteProps {
  user?: User;
  setUser: (user: User | undefined) => void;
}
