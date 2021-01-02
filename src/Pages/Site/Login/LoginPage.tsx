import React from "react";

import "./LoginPage.scss";

import { pageColor } from "Pages/_Constants/pageColor";
import { Container } from "reactstrap";
import LoginForm from "Modules/Auth/Components/LoginForm/LoginForm";
import { Link, useHistory } from "react-router-dom";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import { User } from "Modules/Auth/_Interfaces/User";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";
import { setUserToLocalStorage } from "Modules/Auth/mock";
import { DrilledRouteProps } from "_Interfaces/DrilledRouteProps";
import { checkAuth } from "Modules/Auth/_Helpers/checkAuth";

export default function LoginPage({ drilledProps, route }: PageProps) {
  const history = useHistory();

  const setUser: DrilledRouteProps["setUser"] | undefined =
    drilledProps && drilledProps.setUser;

  const _pageColor: string =
    drilledProps && drilledProps.appColors && drilledProps.appColors.page
      ? drilledProps.appColors.page
      : pageColor;

  return (
    <section
      className="loginPage"
      style={{ border: `4px solid ${_pageColor}` }}
    >
      <header>
        <Container>
          <h2>Login page</h2>
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
                if (route.authRule && !checkAuth(route.authRule, user)) {
                  console.log(
                    'The route was restricted for a logged in user, so we redirected to "/"'
                  );

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
