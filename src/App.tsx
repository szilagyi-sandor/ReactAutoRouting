import React, { Suspense } from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ErrorBoundary from "Modules/Layout/ErrorBoundary/ErrorBoundary";
import SimpleLoader from "Modules/Layout/SimpleLoader/SimpleLoader";
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "Pages/Home/HomePage";
import Test1Page from "Pages/Test1/Test1Page";
import NotFoundPage from "Pages/NotFound/NotFoundPage";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<SimpleLoader />}>
          {/**TODO: remove */}
          <Container>
            <h1>ReactAutoRouting</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/test1">Test</Link>
              </li>

              <li>
                <Link to="/oops">Oops</Link>
              </li>
            </ul>
          </Container>

          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/test1" component={Test1Page} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
