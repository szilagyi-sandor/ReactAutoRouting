import React, { useState } from "react";

import "./AdminRestrictedPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { handleAuthMessage } from "Modules/Routing/ReactAutoRouting/_Helpers/Auth/handleAuthMessage";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";

export default function AdminRestrictedPage({ route }: PageProps) {
  const [number, setNumber] = useState(0);

  return (
    <section
      className="adminRestrictedPage"
      style={{ border: `4px solid ${pageColor}` }}
    >
      <header>
        <Container fluid>
          <h2>Admin Resticted page</h2>

          <RenderChecker
            number={number}
            setNumber={(val) => setNumber(val)}
            label="Restricted page:"
          />
        </Container>
      </header>

      <div className="content">
        <Container fluid>
          <p>{handleAuthMessage(route.authRule)} </p>
        </Container>
      </div>
    </section>
  );
}
