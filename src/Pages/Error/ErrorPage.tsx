import React, { useState } from "react";

import "./ErrorPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";

export default function ErrorPage() {
  const [number, setNumber] = useState(0);

  return (
    <section className="errorPage" style={{ border: `4px solid ${pageColor}` }}>
      <header>
        <Container>
          <h2>Error page</h2>

          <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
        </Container>
      </header>

      <div className="content">
        <Container>
          <p>Something went wrong.</p>
        </Container>
      </div>
    </section>
  );
}
