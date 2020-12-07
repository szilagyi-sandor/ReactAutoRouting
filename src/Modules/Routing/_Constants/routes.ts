import { createRoutes } from "../ReactAutoRouting/_Helpers/createRoutes";
import { processRoutes } from "../ReactAutoRouting/_Helpers/processRoutes";
import { handledAuthTypes } from "../__ReactAutoRouting/_Constants/handledAuthTypes";
import { lazyLayouts } from "./lazyLayouts";
import { lazyPages } from "./lazyPages";

// Order matters here!
export const unprocessedRoutes = createRoutes({
  // DEV LAYOUT
  dev: {
    Component: lazyLayouts.Dev,
    paths: [""],
    children: {
      // ADMIN LAYOUT
      admin: {
        Component: lazyLayouts.Admin,
        paths: ["/admin"],
        documentTitle: "Admin - ",
        // authRule: {
        //   type: handledAuthTypes.requiredLevel,
        //   level: 2,
        // },
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
            paths: ["/super-secret", "/secret"],
          },

          // TODO: remove
          // Testing on admin.
          purple: {
            Component: lazyLayouts.Purple,
            documentTitle: "Purple - ",
            paths: ["/purple", "/half-purple"],
            children: {
              test1: {
                Component: lazyPages.Test1,
                documentTitle: "Test-1",
                paths: ["/test-1", "/t-1"],
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
                Component: lazyPages.Restricted,
                documentTitle: "Test purple restriction",
                // paths: ["*"],
              },
            },
          },

          notFound: {
            Component: lazyPages.AdminNotFound,
            documentTitle: "Not found",
            paths: ["*"],
          },

          _restricted: {
            Component: lazyPages.Restricted,
            documentTitle: "Test admin restriction",
          },
        },
      },

      // Testing a page on dev level.
      // TODO: remove
      test1: {
        Component: lazyPages.Test1,
        documentTitle: "Test-1",
        paths: ["/test-1", "/t-1"],
      },

      // SITE LAYOUT
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
            paths: ["/Login", "/sign-in"],
            authRule: {
              type: handledAuthTypes.acceptedRoles,
              roles: [0],
            },
          },

          // TODO: remove
          // Testing on site.
          purple: {
            Component: lazyLayouts.Purple,
            documentTitle: "Purple - ",
            paths: ["/purple", "/half-purple"],
            children: {
              test2: {
                Component: lazyPages.Test2,
                documentTitle: "Test-2",
                paths: [""],
              },

              purple: {
                Component: lazyLayouts.Purple,
                documentTitle: "Purple - ",
                paths: ["/purple", "/half-purple"],
                children: {
                  test1: {
                    Component: lazyPages.Test1,
                    documentTitle: "Test-1",
                    paths: [""],
                  },
                },
              },
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
            documentTitle: "Root restricted",
          },
        },
      },
    },
  },
});

export const routes = processRoutes(unprocessedRoutes);
