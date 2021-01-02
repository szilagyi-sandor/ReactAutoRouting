import { StoredRoute } from "Modules/Customization/_Interfaces/StoredRoute";

export const exampleCustomRoutes: Record<string, StoredRoute> = {
  dev: {
    paths: [""],
    Component: "Dev",
    children: {
      admin: {
        Component: "Admin",
        paths: ["/admin"],
        documentTitle: "Admin - ",
        authRule: {
          type: 1,
          level: 2,
        },
        children: {
          home: {
            Component: "AdminHome",
            documentTitle: "Home",
            paths: [""],
          },

          routeSetter: {
            Component: "RouteSetter",
            documentTitle: "Route settings",
            paths: ["/route-settings", "/routes"],
          },

          notFound: {
            Component: "AdminNotFound",
            documentTitle: "Not found",
            paths: ["*"],
          },

          _restricted: {
            Component: "AdminRestricted",
            documentTitle: "Restricted Page",
          },
        },
      },

      site: {
        Component: "Site",
        paths: [""],
        children: {
          home: {
            Component: "Api",
            documentTitle: "Home",
            paths: ["/"],
          },

          notFound: {
            Component: "NotFound",
            documentTitle: "Not found",
            paths: ["*"],
          },
        },
      },

      _restricted: {
        Component: "Site",
        children: {
          _restricted: {
            Component: "Restricted",
            documentTitle: "Restricted Page",
          },
        },
      },
    },
  },
};
