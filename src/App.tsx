import React, { useEffect, useState } from "react";

import "./App.scss";

import ErrorBoundary from "Modules/Layout/SmartComponents/ErrorBoundary/ErrorBoundary";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import { routes } from "Modules/Routing/_Constants/routes";
import { siteLayoutColor } from "Modules/Layout/SmartComponents/Layouts/Site/_Constants/siteLayoutColor";
import { matchPath, useLocation } from "react-router-dom";
import { getAllRoutePaths } from "Modules/Routing/ReactAutoRouting/_Helpers/getAllRoutePaths";
import { adminLayoutColor } from "Modules/Layout/SmartComponents/Layouts/Admin/_Constants/adminLayoutColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";

function App() {
  // Deciding which color to add to the first loader, based on
  // which layout will be rendered first. In this case it's the adminLayout or the siteLayout.
  const { pathname } = useLocation();
  const loaderColor = !!matchPath(pathname, getAllRoutePaths(routes.admin))
    ? adminLayoutColor
    : siteLayoutColor;

  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("App - render");
    console.log(routes);
  });

  return (
    <div className="App">
      <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
      <ErrorBoundary>
        <RouteMapper
          routes={routes}
          suspenseFallback={<SimpleLoader color={loaderColor} />}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
