import { customRouteStorageName } from "Modules/Customization/_Constants/customRouteStorageName";
import { StoredRoute } from "Modules/Customization/_Interfaces/StoredRoute";

export const setCustomRoutesToLocalStorage = (
  customRoutes: Record<string, StoredRoute>
) => {
  localStorage.setItem(customRouteStorageName, JSON.stringify(customRoutes));
};
