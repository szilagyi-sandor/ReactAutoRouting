import { lazy } from "react";
import { createRoutes } from "../ReactAutoRouting/_Helpers/createRoutes";
import { processRoutes } from "../ReactAutoRouting/_Helpers/processRoutes";

// TODO: lazy import in other file so this file is not flooded
// Pages
const HomePage = lazy(() => import("Pages/Home/HomePage"));
const AdminHomePage = lazy(() => import("Pages/AdminHome/AdminHomePage"));
// TODO: different one in different wrappers
const NotFoundPage = lazy(() => import("Pages/NotFound/NotFoundPage"));
// TODO: missing now
// const RestrictedPage = lazy(() => import("Pages/Restricted/RestrictedPage"));
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
    children: {
      home: {
        Component: AdminHomePage,
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
          },

          test2: {
            Component: Test2Page,
            documentTitle: "Test 2",
            paths: ["/test-2"],
          },

          notFound: {
            Component: NotFoundPage,
            paths: ["*"],
            documentTitle: "Not Found",
          },
        },
      },

      test2: {
        Component: Test2Page,
        documentTitle: "Test 2",
        paths: ["/test-2"],
      },
    },
  },

  site: {
    Component: SiteLayout,
    children: {
      home: {
        Component: HomePage,
        documentTitle: "Home",
        paths: ["/"],
      },

      red: {
        Component: RedLayout,
        paths: ["/red", "/half-red"],
        children: {
          green: {
            Component: GreenLayout,
            paths: ["/green", "/half-green"],
            children: {
              test1: {
                Component: Test1Page,
                documentTitle: "Test 1",
                paths: ["/test-1", "/t-1"],
              },
            },
          },
        },
      },

      green: {
        Component: GreenLayout,
        paths: ["/green", "/half-green"],
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

      // TODO: auth is missing now
      // restricted: {
      //   Component: () => null,
      //   documentTitle: "Restricted",
      // },
    },
  },
});

export const routes = processRoutes(unprocessedRoutes);
