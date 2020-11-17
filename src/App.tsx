import React, { Suspense } from "react";

import "./App.scss";

import ErrorBoundary from "Modules/Layout/SmartComponents/ErrorBoundary/ErrorBoundary";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import { routes } from "Modules/Routing/_Constants/routes";
import { getRoutePath } from "Modules/Routing/ReactAutoRouting/_Helpers/getRoutePath";

function App() {
  getRoutePath(routes.admin);

  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<SimpleLoader />}>
          <RouteMapper routes={routes} suspenseFallback={<SimpleLoader />} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
