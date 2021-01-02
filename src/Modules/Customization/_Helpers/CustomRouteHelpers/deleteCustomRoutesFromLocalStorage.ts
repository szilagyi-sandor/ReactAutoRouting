import { customRouteStorageName } from "Modules/Customization/_Constants/customRouteStorageName";

export const deleteCustomRoutesFromLocalStorage = () => {
  localStorage.removeItem(customRouteStorageName);
};
