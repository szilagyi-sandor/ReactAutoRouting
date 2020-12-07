import React, { Suspense } from "react";

import { Route, Switch, useLocation } from "react-router-dom";
import { Route as IRoute } from "../_Interfaces/Route";
import { getAllRoutePaths } from "../_Helpers/PathHandlers/getAllRoutePaths";
import { RouteMapperProps } from "./interfaces";
import { checkChildrenAuth } from "../_Helpers/Auth/checkChildrenAuth";
import { filterParentSelectors } from "../_Helpers/SelectorHandlers/filterParentSelectors";
import { findToBeRenderedSelector } from "../_Helpers/SelectorHandlers/findToBeRenderedSelector";
import { getAllSelectorsFromSelector } from "../_Helpers/SelectorHandlers/getAllSelectorsFromSelector";
import { checkAuth } from "Modules/Routing/__ReactAutoRouting/_Helpers/checkAuth";
import RouteRenderer from "../RouteRenderer/RouteRenderer";

// TODO: clean this up a little bit
export default function RouteMapper(props: RouteMapperProps) {
  const {
    routeObj,
    currentRouteObj,
    suspenseFallback,
    authChecker,
    userInfo,
    showRestrictedPage,
  } = props;
  const { pathname } = useLocation();
  const _currentRouteObj = currentRouteObj ? currentRouteObj : routeObj;
  let restrictedRoute: IRoute | undefined = _currentRouteObj._restricted;

  return (
    <Suspense fallback={suspenseFallback}>
      <Switch>
        {Object.keys(_currentRouteObj).map((key, index) => {
          const route = _currentRouteObj[key];
          const {
            paths,
            children,
            authRule,
            childrenInfo,
            parentsInfo,
          } = route;

          if (showRestrictedPage) {
            return (
              <Route
                key={index}
                render={() => {
                  if (!restrictedRoute) {
                    document.title = "Restricted";
                    return null;
                  }

                  return (
                    <RouteRenderer
                      route={restrictedRoute}
                      routeMapperProps={props}
                      restricted
                    />
                  );
                }}
              />
            );
          }

          if (!paths || paths.length === 0) {
            return null;
          }

          const path = getAllRoutePaths(routeObj, route);
          return (
            <Route
              key={index}
              path={path}
              render={() => {
                let restricted: boolean | undefined;

                if (authRule) {
                  restricted = !(authChecker
                    ? authChecker(authRule, userInfo)
                    : checkAuth(authRule, userInfo));
                }

                if (
                  !restricted &&
                  children &&
                  childrenInfo &&
                  restrictedRoute
                ) {
                  const currentSelector = parentsInfo
                    ? [...parentsInfo.paths[parentsInfo.paths.length - 1], key]
                    : [key];
                  const childPageSelectors = filterParentSelectors(
                    childrenInfo.paths
                  ).map((s) => [...currentSelector, ...s]);

                  // Check which children will be rendered.
                  const toBeRenderedSelector = findToBeRenderedSelector(
                    routeObj,
                    childPageSelectors,
                    pathname
                  );

                  // ToBeRenderedSelector might be null, if a sibling will be rendered.
                  if (toBeRenderedSelector) {
                    restricted = !checkChildrenAuth(
                      children,
                      childrenInfo.paths,
                      getAllSelectorsFromSelector(
                        toBeRenderedSelector.slice(currentSelector.length)
                      ),
                      userInfo
                    );
                  }
                }

                if (restricted) {
                  if (!restrictedRoute) {
                    document.title = "Restricted";
                    return null;
                  }

                  return (
                    <RouteRenderer
                      route={restrictedRoute}
                      routeMapperProps={props}
                      restricted
                    />
                  );
                }

                return (
                  <RouteRenderer
                    route={route}
                    routeMapperProps={props}
                    restricted={false}
                  />
                );
              }}
              exact
            />
          );
        })}
        )
      </Switch>
    </Suspense>
  );
}
