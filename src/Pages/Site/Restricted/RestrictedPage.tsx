import React, { useState } from "react";

import "./RestrictedPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { mockedUserInfo } from "Utils/mocks";
import LoginPage from "../Login/LoginPage";
import { handleAuthMessage } from "Modules/Routing/ReactAutoRouting/_Helpers/Auth/handleAuthMessage";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";

export default function RestrictedPage({ route, drilledProps }: PageProps) {
  const [number, setNumber] = useState(0);

  if (mockedUserInfo.role > 0) {
    return (
      <section
        className="restrictedPage"
        style={{ border: `4px solid ${pageColor}` }}
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

  return <LoginPage />;
}
