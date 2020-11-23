import React, { lazy } from "react";

import { handledAuthTypes } from "../ReactAutoRouting/_Constants/handledAuthTypes";
import { createRoutes } from "../ReactAutoRouting/_Helpers/createRoutes";
import { processRoutes } from "../ReactAutoRouting/_Helpers/processRoutes";

// TODO: lazy import in other file so this file is not flooded
// TODO: use a naming that is consistent
// Pages
const HomePage = lazy(() => import("Pages/Home/HomePage"));
const AdminHomePage = lazy(() => import("Pages/AdminHome/AdminHomePage"));
const NotFoundPage = lazy(() => import("Pages/NotFound/NotFoundPage"));
const InformalNotFoundPage = lazy(
  () => import("Pages/InformalNotFound/InformalNotFoundPage")
);
// TODO: missing now
const RestrictedPage = lazy(() => import("Pages/Restricted/RestrictedPage"));
const Test1Page = lazy(() => import("Pages/Test1/Test1Page"));
const Test2Page = lazy(() => import("Pages/Test2/Test2Page"));

// Layouts
const SiteLayout = lazy(
  () => import("Modules/Layout/SmartComponents/Layouts/Site/SiteLayout")
);
const AdminLayout = lazy(
  () => import("Modules/Layout/SmartComponents/Layouts/Admin/AdminLayout")
);
const GreenLayout = lazy(
  () => import("Modules/Layout/SmartComponents/Layouts/Green/GreenLayout")
);
const RedLayout = lazy(
  () => import("Modules/Layout/SmartComponents/Layouts/Red/RedLayout")
);

// Order matters here!
// TODO: Auth rules should accept the whole role instead of value
// TODO: components are missing
// TODO: AuthRules are missing
// TODO: Test if there's notFoundPage, or if there's not
// TODO: double check the diff between [], [""], ["*"], undefined
// TODO: lazy loading
// TODO: call SiteHomePage HomePage everywhere

export const unprocessedRoutes = createRoutes({
  admin: {
    Component: AdminLayout,
    paths: ["/admin"],
    documentTitle: "Admin - ",
    authRule: {
      type: handledAuthTypes.requiredLevel,
      level: 2,
    },
    children: {
      home: {
        Component: AdminHomePage,
        paths: [""],
        documentTitle: "Home",
      },

      green: {
        Component: GreenLayout,
        paths: ["/green", "/half-green"],
        documentTitle: "Green - ",
        children: {
          test1: {
            Component: Test1Page,
            documentTitle: "Test 1",
            paths: ["", "/test-1", "/t-1"],
            authRule: {
              type: handledAuthTypes.excludedRoles,
              roles: [2],
            },
          },

          test2: {
            Component: Test2Page,
            documentTitle: "Test 2",
            paths: ["/test-2"],
          },
        },
      },

      test2: {
        Component: Test2Page,
        documentTitle: "Test 2",
        paths: ["/test-2"],
        authRule: {
          type: handledAuthTypes.excludedRoles,
          roles: [2],
        },
      },

      notFound: {
        Component: InformalNotFoundPage,
        paths: ["*"],
        documentTitle: "Not Found",
      },

      _restricted: {
        Component: RestrictedPage,
        documentTitle: "Restricted",
      },
    },
  },

  // TODO: think about how this should handled. Is it Ok to use tsx for this file?
  _restricted: {
    Component: () => (
      <SiteLayout>
        <RestrictedPage />
      </SiteLayout>
    ),
    documentTitle: "Restricted",
  },

  site: {
    Component: SiteLayout,
    documentTitle: "Site - ",
    paths: [""],
    children: {
      home: {
        Component: HomePage,
        documentTitle: "Home",
        paths: ["/"],
      },

      red: {
        Component: RedLayout,
        paths: ["/red", "/half-red"],
        documentTitle: "Red - ",
        children: {
          green: {
            Component: GreenLayout,
            paths: ["/green", "/half-green"],
            documentTitle: "Green - ",
            children: {
              test1: {
                Component: Test1Page,
                documentTitle: "Test 1",
                paths: ["/test-1", "/t-1"],
              },
              notFound: {
                Component: NotFoundPage,
                paths: ["*"],
                documentTitle: "Not Found",
              },
            },
          },

          // This resricted page has it's own route. If you
          // want it to be hidden just don't set it's paths.
          _restricted: {
            Component: RestrictedPage,
            documentTitle: "Restricted",
            paths: ["/restricted"],
          },

          notFound: {
            Component: NotFoundPage,
            paths: ["*"],
            documentTitle: "Not Found",
          },
        },
      },

      green: {
        Component: GreenLayout,
        paths: ["/green", "/half-green"],
        documentTitle: "Green - ",
        children: {
          test1: {
            Component: Test1Page,
            documentTitle: "Test 1",
            paths: ["/test-1", "/t-1"],
          },

          test2: {
            Component: Test2Page,
            documentTitle: "Test 2",
            paths: ["/test-2"],
          },
        },
      },

      notFound: {
        paths: ["*"],
        Component: NotFoundPage,
        documentTitle: "Not Found",
      },

      _restricted: {
        Component: RestrictedPage,
        documentTitle: "Restricted",
      },
    },
  },
});

export const routes = processRoutes(unprocessedRoutes);
