import { createRoutePathObject } from "../ReactAutoRouting/_Helpers/PathHandlers/createRoutePathObject";
import { routes } from "./routes";

const { dev } = routes;
const { admin, site } = dev.children;
const { home, about, contact, api, registration, login } = site.children;
const {
  home: adminHome,
  routeSetter,
  menuSetter,
  superSecret,
} = admin.children;

export const routePaths = createRoutePathObject(routes, {
  adminHome,
  routeSetter,
  menuSetter,
  superSecret,
  home,
  about,
  contact,
  api,
  registration,
  login,
});
