import React, { Suspense } from "react";

import { Route, Switch } from "react-router-dom";
import { getAllRoutePaths } from "../_Helpers/getAllRoutePaths";
import { RouteMapperProps } from "./interfaces";

// TODO: document title
// TODO: RouteProps finishing touch
export default function RouteMapper({
  routes,
  suspenseFallback,
  documentTitleFallback,
}: RouteMapperProps) {
  return (
    <Suspense fallback={suspenseFallback}>
      <Switch>
        {Object.keys(routes).map((key, index) => {
          const route = routes[key];
          const { Component } = route;
          const path = getAllRoutePaths(route);

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
                    console.log(documentTitleFallback);
                    documentTitle = documentTitleFallback
                      ? documentTitleFallback
                      : "Document";
                  }

                  document.title = documentTitle;
                }

                return (
                  // TODO: authChecker missing
                  // <AuthChecker rule={r.authRule}>
                  // TODO: check if props given this way work properly
                  <Component
                    {...(route.children
                      ? {
                          routes: route.children,
                          suspenseFallback: suspenseFallback,
                          documentTitleFallback,
                        }
                      : {})}
                  />
                  // </AuthChecker>
                );
              }}
              exact
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
