import { customRouteStorageName } from "Modules/Customization/_Constants/customRouteStorageName";
import { StoredRoute } from "Modules/Customization/_Interfaces/StoredRoute";

export const getCustomRoutes = (): Record<string, StoredRoute> | undefined => {
  const storedItem = localStorage.getItem(customRouteStorageName);

  if (storedItem) {
    try {
      return JSON.parse(storedItem);
    } catch (error) {
      return undefined;
    }
  }

  return undefined;
};
