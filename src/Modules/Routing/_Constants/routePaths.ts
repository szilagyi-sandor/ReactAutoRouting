import { getRoutePath } from "../ReactAutoRouting/_Helpers/PathHandlers/getRoutePath";
import { routes } from "./routes";

const { dev } = routes;
const { test1, admin, site } = dev.children;

// Admin pages.
const { home, routeSetter, menuSetter, superSecret, purple } = admin.children;
const { test1: purpleTest1 } = purple.children;

// Site pages.
const {
  home: siteHome,
  about,
  contact,
  api,
  registration,
  login,
  purple: sitePurple,
} = site.children;
const { test2, purple: sitePurplePurple } = sitePurple.children;
const { test1: sitePurplePurpleTest1 } = sitePurplePurple.children;

// TODO: make this automatic!
export const routePaths = {
  test1: getRoutePath(routes, test1),
  admin: {
    home: getRoutePath(routes, home),
    routeSetter: getRoutePath(routes, routeSetter),
    menuSetter: getRoutePath(routes, menuSetter),
    superSecret: getRoutePath(routes, superSecret),
    purple: {
      test1: getRoutePath(routes, purpleTest1),
    },
  },

  site: {
    home: getRoutePath(routes, siteHome),
    about: getRoutePath(routes, about),
    contact: getRoutePath(routes, contact),
    api: getRoutePath(routes, api),
    registration: getRoutePath(routes, registration),
    login: getRoutePath(routes, login),
    purple: {
      test2: getRoutePath(routes, test2),
      purple: {
        test1: getRoutePath(routes, sitePurplePurpleTest1),
      },
    },
  },
};
