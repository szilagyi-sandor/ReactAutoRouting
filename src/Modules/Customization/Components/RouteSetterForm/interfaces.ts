import { StoredRoute } from "Modules/Customization/_Interfaces/StoredRoute";

export interface RouteSetterFormProps {
  setRoutes: (storedRoutes: Record<string, StoredRoute> | undefined) => void;
}
