import React, { useState } from "react";

import "./RestrictedPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";

export default function RestrictedPage() {
  const [number, setNumber] = useState(0);

  return (
    <section
      className="restrictedPage"
      style={{ border: `4px solid ${pageColor}` }}
    >
      <header>
        <Container>
          <h2>Resticted page</h2>

          <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
        </Container>
      </header>

      <div className="content">
        <Container>
          <p>You do not have access to the requested resource</p>
        </Container>
      </div>
    </section>
  );
}
