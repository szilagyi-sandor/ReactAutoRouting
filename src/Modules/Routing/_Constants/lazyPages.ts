import { lazy } from "react";

export const lazyPages = {
  // Site pages.
  Home: lazy(() => import("Pages/Site/Home/HomePage")),
  About: lazy(() => import("Pages/Site/About/AboutPage")),
  Api: lazy(() => import("Pages/Site/Api/ApiPage")),
  Contact: lazy(() => import("Pages/Site/Contact/ContactPage")),
  Registration: lazy(() => import("Pages/Site/Registration/RegistrationPage")),
  Login: lazy(() => import("Pages/Site/Login/LoginPage")),
  NotFound: lazy(() => import("Pages/Site/NotFound/NotFoundPage")),
  Restricted: lazy(() => import("Pages/Site/Restricted/RestrictedPage")),

  // Admin pages.
  AdminHome: lazy(() => import("Pages/Admin/Home/AdminHomePage")),
  RouteSetter: lazy(() => import("Pages/Admin/RouteSetter/RouteSettterPage")),
  MenuSetter: lazy(() => import("Pages/Admin/MenuSetter/MenuSetterPage")),
  SuperSecret: lazy(() => import("Pages/Admin/SuperSecret/SuperSecretPage")),
  AdminNotFound: lazy(() => import("Pages/Admin/NotFound/AdminNotFoundPage")),

  // Test pages:
  Test1: lazy(() => import("Pages/Test/Test1/Test1Page")),
  Test2: lazy(() => import("Pages/Test/Test2/Test2Page")),
};
