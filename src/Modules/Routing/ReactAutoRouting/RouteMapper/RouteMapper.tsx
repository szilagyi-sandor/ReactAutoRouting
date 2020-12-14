import React, { Suspense } from "react";

import { Route, Switch, useLocation } from "react-router-dom";
import { Route as IRoute } from "../_Interfaces/Routes/Route";
import { getAllRoutePaths } from "../_Helpers/PathHandlers/getAllRoutePaths";
import { RouteMapperProps } from "./interfaces";
import { checkChildrenAuth } from "../_Helpers/Auth/checkChildrenAuth";
import { filterParentSelectors } from "../_Helpers/SelectorHandlers/filterParentSelectors";
import { findToBeRenderedSelector } from "../_Helpers/SelectorHandlers/findToBeRenderedSelector";
import { getAllSelectorsFromSelector } from "../_Helpers/SelectorHandlers/getAllSelectorsFromSelector";
import RouteRenderer from "../RouteRenderer/RouteRenderer";
import { getNestedItem } from "../_Helpers/ItemGetters/getNestedItem";
import { checkAuth } from "../_Helpers/Auth/authCheckers";

export default function RouteMapper(props: RouteMapperProps) {
  const {
    routeObj,
    currentRouteObj,
    suspenseFallback,
    authChecker,
    userInfo,
    restrictionCauser,
    autoCheckRules,
    autoCheckChildrenRoutes,
  } = props;

  const { pathname } = useLocation();
  const _autoCheckRules = !(autoCheckRules === false);
  const _autoCheckChildrenRoutes = !(autoCheckChildrenRoutes === false);
  const _currentRouteObj = currentRouteObj ? currentRouteObj : routeObj;
  const _checkAuth = authChecker ? authChecker : checkAuth;
  let restrictedRoute: IRoute | undefined = _currentRouteObj._restricted;

  return (
    <Suspense fallback={suspenseFallback}>
      <Switch>
        {/* If showRestrictedPage is true, we will always display the _restricted
        Component. */}
        {restrictionCauser ? (
          <Route
            render={() => {
              if (!restrictedRoute) {
                document.title = "Restricted";
                return null;
              }

              return (
                <RouteRenderer
                  route={restrictedRoute}
                  routeMapperProps={props}
                  restrictionCauser={restrictionCauser}
                />
              );
            }}
          />
        ) : (
          Object.keys(_currentRouteObj).map((key, index) => {
            const route = _currentRouteObj[key];
            const {
              paths,
              children,
              authRule,
              childrenInfo,
              parentsInfo,
            } = route;

            // Filtering out routes without paths.
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
                  let restrictionCauser: IRoute | undefined;

                  // Checking own authRule.
                  if (_autoCheckRules && authRule) {
                    restricted = !_checkAuth(authRule, userInfo);

                    if (restricted) {
                      restrictionCauser = route;
                    }
                  }

                  // Checking children without a _resticted sibling, but only if this route
                  // is not already restricted and this route has a _restricted sibling.
                  if (
                    _autoCheckChildrenRoutes &&
                    !restricted &&
                    children &&
                    childrenInfo &&
                    restrictedRoute
                  ) {
                    const currentSelector = parentsInfo
                      ? [
                          ...parentsInfo.selectors[
                            parentsInfo.selectors.length - 1
                          ],
                          key,
                        ]
                      : [key];

                    const childPageSelectors = filterParentSelectors(
                      childrenInfo.selectors
                    ).map((s) => [...currentSelector, ...s]);

                    // Check which child will be rendered.
                    const toBeRenderedSelector = findToBeRenderedSelector(
                      routeObj,
                      childPageSelectors,
                      pathname
                    );

                    // ToBeRenderedSelector might be null, if a sibling will be rendered.
                    if (toBeRenderedSelector) {
                      restricted = !checkChildrenAuth(
                        children,
                        childrenInfo.selectors,
                        getAllSelectorsFromSelector(
                          toBeRenderedSelector.slice(currentSelector.length)
                        ),
                        userInfo,
                        authChecker
                      );

                      if (restricted) {
                        restrictionCauser = getNestedItem(
                          children,
                          toBeRenderedSelector.slice(currentSelector.length)
                        );
                      }
                    }
                  }

                  // Handle rendering.
                  if (restricted) {
                    if (!restrictedRoute) {
                      document.title = "Restricted";
                      return null;
                    }

                    return (
                      <RouteRenderer
                        route={restrictedRoute}
                        routeMapperProps={props}
                        restrictionCauser={restrictionCauser}
                      />
                    );
                  }

                  return (
                    <RouteRenderer
                      route={route}
                      routeMapperProps={props}
                      restrictionCauser={restrictionCauser}
                    />
                  );
                }}
                exact
              />
            );
          })
        )}
        )
      </Switch>
    </Suspense>
  );
}
