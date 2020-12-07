import { lazy } from "react";

export const lazyLayouts = {
  Dev: lazy(() => import("Layouts/Dev/DevLayout")),
  Site: lazy(() => import("Layouts/Site/SiteLayout")),
  Admin: lazy(() => import("Layouts/Admin/AdminLayout")),
  Purple: lazy(() => import("Layouts/Purple/PurpleLayout")),
  Helper: lazy(() => import("../ReactAutoRouting/HelperLayout/HelperLayout")),
};
