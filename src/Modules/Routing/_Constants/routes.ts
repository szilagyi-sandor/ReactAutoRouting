import { handledAuthTypes } from "../ReactAutoRouting/_Constants/handledAuthTypes";
import { createRoutes } from "../ReactAutoRouting/_Helpers/RouteHandlers/createRoutes";
import { processRoutes } from "../ReactAutoRouting/_Helpers/RouteHandlers/processRoutes";
import { lazyLayouts } from "./lazyLayouts";
import { lazyPages } from "./lazyPages";

// Order matters here.
export const unprocessedRoutes = createRoutes({
  // DEV LAYOUT.
  dev: {
    Component: lazyLayouts.Dev,
    paths: [""],
    children: {
      // ADMIN LAYOUT.
      admin: {
        Component: lazyLayouts.Admin,
        paths: ["/admin"],
        documentTitle: "Admin - ",
        authRule: {
          type: handledAuthTypes.requiredLevel,
          level: 2,
        },
        children: {
          home: {
            Component: lazyPages.AdminHome,
            documentTitle: "Home",
            paths: [""],
          },

          routeSetter: {
            Component: lazyPages.RouteSetter,
            documentTitle: "Route settings",
            paths: ["/route-settings", "/routes"],
          },

          menuSetter: {
            Component: lazyPages.MenuSetter,
            documentTitle: "Menu settings",
            paths: ["/menu-settings", "/menus"],
          },

          superSecret: {
            Component: lazyPages.SuperSecret,
            documentTitle: "Super secret",
            paths: ["/super-secret/:id?", "/secret/:id?"],
            authRule: {
              type: handledAuthTypes.requiredLevel,
              level: 3,
            },
          },

          notFound: {
            Component: lazyPages.AdminNotFound,
            documentTitle: "Not found",
            paths: ["*"],
          },

          _restricted: {
            Component: lazyPages.AdminRestricted,
            documentTitle: "Restricted Page",
          },
        },
      },

      // SITE LAYOUT.
      site: {
        Component: lazyLayouts.Site,
        paths: [""],
        children: {
          home: {
            Component: lazyPages.Home,
            documentTitle: "Home",
            paths: ["/"],
          },

          about: {
            Component: lazyPages.About,
            documentTitle: "About",
            paths: ["/about"],
          },

          api: {
            Component: lazyPages.Api,
            documentTitle: "API",
            paths: ["/api"],
          },

          contact: {
            Component: lazyPages.Contact,
            documentTitle: "Contact",
            paths: ["/contact"],
          },

          registration: {
            Component: lazyPages.Registration,
            documentTitle: "Registration",
            paths: ["/registration", "/sign-up"],
            authRule: {
              type: handledAuthTypes.acceptedRoles,
              roles: [0],
            },
          },

          login: {
            Component: lazyPages.Login,
            documentTitle: "Login",
            paths: ["/login", "/sign-in"],
            authRule: {
              type: handledAuthTypes.acceptedRoles,
              roles: [0],
            },
          },

          notFound: {
            Component: lazyPages.NotFound,
            documentTitle: "Not found",
            paths: ["*"],
          },
        },
      },

      _restricted: {
        Component: lazyLayouts.Site,
        children: {
          _restricted: {
            Component: lazyPages.Restricted,
            documentTitle: "Restricted Page",
          },
        },
      },
    },
  },
});

export const routes = processRoutes(unprocessedRoutes);
