import React, { useState } from "react";

import "./LoginPage.scss";

import { pageColor } from "Pages/_Constants/pageColor";
import { Container } from "reactstrap";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import LoginForm from "Modules/Auth/Components/LoginForm/LoginForm";
import { Link, matchPath, useHistory, useLocation } from "react-router-dom";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import { User } from "Modules/Auth/_Interfaces/User";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";
import { setUserToLocalStorage } from "Modules/Auth/mock";
import { routes } from "Modules/Routing/_Constants/routes";
import { getAllRoutePaths } from "Modules/Routing/ReactAutoRouting/_Helpers/PathHandlers/getAllRoutePaths";
import { DrilledRouteProps } from "_Interfaces/DrilledRouteProps";

export default function LoginPage({ drilledProps }: PageProps) {
  const [number, setNumber] = useState(0);

  const { pathname } = useLocation();
  const history = useHistory();

  const setUser: DrilledRouteProps["setUser"] =
    drilledProps && drilledProps.setUser;

  return (
    <section className="loginPage" style={{ border: `4px solid ${pageColor}` }}>
      <header>
        <Container>
          <h2>Login page</h2>

          <RenderChecker
            number={number}
            setNumber={(val) => setNumber(val)}
            label="Site login page:"
          />
        </Container>
      </header>

      <div className="content">
        <Container>
          <p>
            No account yet?{" "}
            <Link to={routePaths.registration}>Go to registration page</Link>
          </p>

          <LoginForm
            onSubmit={(user: User) => {
              if (setUser) {
                // If we are on the /login route as soon as we log in it will be restricted, so the
                // user is redirected to the home page.
                const isLoginRoute = !!matchPath(pathname, {
                  path: getAllRoutePaths(
                    routes,
                    routes.dev.children.site.children.login
                  ),
                  exact: true,
                });

                if (isLoginRoute) {
                  history.push("/");
                }

                setUser(user);
                setUserToLocalStorage(user);
              }
            }}
          />
        </Container>
      </div>
    </section>
  );
}
