import React, { Suspense } from "react";

import { Route, Switch } from "react-router-dom";
import { getCombinations } from "../_Helpers/combinations";
import { getFullRoutePaths } from "../_Helpers/getFullRoutePaths";
import { RouteMapperProps } from "./interfaces";

// TODO: document title
// TODO: RouteProps finishing touch
export default function RouteMapper({
  routes,
  suspenseFallback,
}: RouteMapperProps) {
  return (
    <Suspense fallback={suspenseFallback}>
      <Switch>
        {Object.keys(routes).map((key, index) => {
          const route = routes[key];
          const { Component } = route;
          const path = getCombinations(getFullRoutePaths(route)).map((p) =>
            p.join("")
          );

          console.log(key, "key");
          console.log(path, "path");
          return (
            <Route
              key={index}
              path={path}
              render={() => (
                // TODO: authChecker missing
                // <AuthChecker rule={r.authRule}>
                // TODO: check if props given this way work properly
                <Component
                  {...(route.children
                    ? {
                        routes: route.children,
                        suspenseFallback: suspenseFallback,
                      }
                    : {})}
                />
                // </AuthChecker>
              )}
              exact
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
