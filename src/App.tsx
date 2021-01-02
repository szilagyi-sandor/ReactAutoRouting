import React, { useEffect, useState } from "react";

import "./App.scss";

import ErrorBoundary from "Modules/Layout/SmartComponents/ErrorBoundary/ErrorBoundary";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { routes as defaultRoutes } from "Modules/Routing/_Constants/routes";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import { matchPath, useLocation } from "react-router-dom";
import { getAllRoutePaths } from "Modules/Routing/ReactAutoRouting/_Helpers/PathHandlers/getAllRoutePaths";
import { checkAuth } from "Modules/Auth/_Helpers/checkAuth";
import { initMockedUser } from "Modules/Auth/mock";
import { DrilledRouteProps } from "_Interfaces/DrilledRouteProps";
import { User } from "Modules/Auth/_Interfaces/User";
import { getAppColors } from "Modules/Customization/_Helpers/AppColorHelpers/getAppColors";
import { getCustomRoutes } from "Modules/Customization/_Helpers/CustomRouteHelpers/getCustomRoutes";
import { processRoutes } from "Modules/Routing/ReactAutoRouting/_Helpers/RouteHandlers/processRoutes";
import { replaceCustomRouteComponents } from "Modules/Customization/_Helpers/CustomRouteHelpers/replaceCustomRouteComponents";
import { defaultAppColors } from "Modules/Customization/_Constants/defaultAppColors";
import { deleteCustomRoutesFromLocalStorage } from "Modules/Customization/_Helpers/CustomRouteHelpers/deleteCustomRoutesFromLocalStorage";
import { getCustomMenuItems } from "Modules/Customization/_Helpers/CustomMenuItems/getCustomMenuItems";
import { defaultMenuItems } from "Modules/Customization/_Constants/defaultMenuItems";

function App() {
  const [number, setNumber] = useState(0);

  // This could be useful. Here you can see a way to check which layout will be rendered first,
  // the adminLayout or the siteLayout. Currently we're just logging this out to the console, but could be used
  // to deciede on what color the loader should be.
  const { pathname } = useLocation();
  const adminOrSiteLayout = !!matchPath(pathname, {
    path: getAllRoutePaths(defaultRoutes, defaultRoutes.dev.children.admin),
    exact: true,
  })
    ? "adminLayout"
    : "siteLayout";

  useEffect(() => {
    console.log(`Layout rendered: ${adminOrSiteLayout}`);
  }, [adminOrSiteLayout]);

  const [mockedUser, setMockedUser] = useState<User | undefined>(
    initMockedUser()
  );

  // Routes.
  const customRoutes = getCustomRoutes();
  const initialRoutes = customRoutes
    ? processRoutes(replaceCustomRouteComponents(customRoutes))
    : defaultRoutes;
  const [routes, setRoutes] = useState(initialRoutes);

  // Colors.
  const customAppColors = getAppColors();
  const initialAppColors = customAppColors ? customAppColors : defaultAppColors;
  const [appColors, setAppColors] = useState(initialAppColors);

  // MenuItems.
  const customMenuItems = getCustomMenuItems();
  const initialMenuItems = customMenuItems ? customMenuItems : defaultMenuItems;
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const drilledProps: DrilledRouteProps = {
    user: mockedUser,
    setUser: setMockedUser,
    appColors,
    setAppColors,
    routes,
    setRoutes,
    menuItems,
    setMenuItems,
  };

  return (
    <div id="App" style={{ border: `4px solid ${appColors.app}` }}>
      <ErrorBoundary>
        <RouteMapper
          routeObj={routes}
          suspenseFallback={<SimpleLoader color={appColors.app} />}
          userInfo={mockedUser}
          drilledProps={drilledProps}
          authChecker={checkAuth}
        />

        <RenderChecker
          number={number}
          setNumber={(val) => setNumber(val)}
          label="App"
        />

        {customRoutes && (
          <div
            className="customRouteHelper"
            style={{
              border: `4px solid ${appColors.app}`,
            }}
          >
            <p>Site is using custom routes</p>

            <button
              onClick={() => {
                setRoutes(defaultRoutes);
                deleteCustomRoutesFromLocalStorage();
              }}
            >
              Set the default routes
            </button>
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;
