import React, { useState } from "react";

import "./RestrictedPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import LoginPage from "../Login/LoginPage";
import { handleAuthMessage } from "Modules/Routing/ReactAutoRouting/_Helpers/Auth/handleAuthMessage";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";
import { defaultUser } from "Modules/Auth/_Constants/defaultUser";
import { User } from "Modules/Auth/_Interfaces/User";

export default function RestrictedPage({ route, drilledProps }: PageProps) {
  const [number, setNumber] = useState(0);

  const user: User =
    drilledProps && drilledProps.user && drilledProps.user.role !== undefined
      ? drilledProps.user
      : defaultUser;

  const _pageColor: string =
    drilledProps && drilledProps.appColors && drilledProps.appColors.page
      ? drilledProps.appColors.page
      : pageColor;

  if (user.role > 0) {
    return (
      <section
        className="restrictedPage"
        style={{ border: `4px solid ${_pageColor}` }}
      >
        <header>
          <Container>
            <h2>Resticted page</h2>

            <RenderChecker
              number={number}
              setNumber={(val) => setNumber(val)}
              label="Restricted page:"
            />
          </Container>
        </header>

        <div className="content">
          <Container>
            <p>{handleAuthMessage(route.authRule)} </p>
          </Container>
        </div>
      </section>
    );
  }

  return <LoginPage route={route} drilledProps={drilledProps} />;
}
