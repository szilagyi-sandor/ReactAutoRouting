import React, { Suspense } from "react";

import { Route, Switch, useLocation } from "react-router-dom";
import { checkAuth } from "../_Helpers/checkAuth";
import { checkChildrenInfoAuth } from "../_Helpers/checkChildrenInfoAuth";
import { getAllRoutePaths } from "../_Helpers/getAllRoutePaths";
import { RouteMapperProps } from "./interfaces";

// TODO: Optimalization for auth
// if it has no sibling a parent will check that, except if it's 1st level

export default function RouteMapper({
  routes,
  suspenseFallback,
  documentTitleFallback,
  authChecker,
  userInfo,
  restricted
}: RouteMapperProps) {
  const { pathname } = useLocation();

  return (
    <Suspense fallback={suspenseFallback}>
      <Switch>
        {Object.keys(routes).map((key, index) => {
          const route = routes[key];

          if (!route.paths || route.paths.length === 0) {
            return null;
          }

          const routeAuthValid = route.authRule
            ? authChecker
              ? authChecker(route.authRule, userInfo)
              : checkAuth(route.authRule, userInfo)
            : true;

          const childrenAuthValid = checkChildrenInfoAuth(
            route,
            pathname,
            userInfo,
            authChecker
          );

          const { Component } = route;
          const path = getAllRoutePaths(route);

          console.log(key, "key");
          console.log(routeAuthValid, "routeAuthValid");
          console.log(childrenAuthValid, "childrenAuthValid");
          console.log(restricted, "restricted");
          return (
            <Route
              key={index}
              path={path}
              render={() => {
                if (!route.children) {
                  let documentTitle = route.parentsInfo
                    ? route.parentsInfo.documentTitles.join("")
                    : "";

                  documentTitle += route.documentTitle
                    ? route.documentTitle
                    : "";

                  if (!documentTitle) {
                    documentTitle = documentTitleFallback
                      ? documentTitleFallback
                      : "Document";
                  }

                  document.title = documentTitle;
                }

                // Optimize
                return restricted !== false && routeAuthValid ? (
                  // TODO: authChecker missing
                  // TODO: check if props given this way work properly
                  <Component
                    {...(route.children
                      ? {
                          routeMapperProps: {
                            routes: route.children,
                            suspenseFallback: suspenseFallback,
                            documentTitleFallback,
                            userInfo,
                            authChecker,
                            restricted: childrenAuthValid
                          },
                        }
                      : {})}
                  />
                ) : // </AuthChecker>
                routes._restricted ? (
                  <routes._restricted.Component />
                ) : null;
              }}
              exact
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
