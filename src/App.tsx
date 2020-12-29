import React, { useEffect, useState } from "react";

import "./App.scss";

import ErrorBoundary from "Modules/Layout/SmartComponents/ErrorBoundary/ErrorBoundary";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { appLayoutColor } from "_Constants/appLayoutColor";
import { routes } from "Modules/Routing/_Constants/routes";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import { matchPath, useLocation } from "react-router-dom";
import { getAllRoutePaths } from "Modules/Routing/ReactAutoRouting/_Helpers/PathHandlers/getAllRoutePaths";
import { checkAuth } from "Modules/Auth/_Helpers/checkAuth";
import { initMockedUser } from "Modules/Auth/mock";
import { DrilledRouteProps } from "_Interfaces/DrilledRouteProps";
import { User } from "Modules/Auth/_Interfaces/User";

function App() {
  const [number, setNumber] = useState(0);

  // This could be useful. Here you can see a way to check which layout will be rendered first,
  // the adminLayout or the siteLayout. Currently we're just logging this out to the console, but could be used
  // to deciede on what color the loader should be.
  const { pathname } = useLocation();
  const adminOrSiteLayout = !!matchPath(pathname, {
    path: getAllRoutePaths(routes, routes.dev.children.admin),
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

  const drilledProps: DrilledRouteProps = {
    user: mockedUser,
    setUser: setMockedUser,
  };

  return (
    <div id="App" style={{ border: `4px solid ${appLayoutColor}` }}>
      <ErrorBoundary>
        <RouteMapper
          routeObj={routes}
          suspenseFallback={<SimpleLoader color={appLayoutColor} />}
          userInfo={mockedUser}
          drilledProps={drilledProps}
          authChecker={checkAuth}
        />

        <RenderChecker
          number={number}
          setNumber={(val) => setNumber(val)}
          label="App"
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
