import React, { useState } from "react";

import "./InformalNotFoundPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";

// TODO: add something funny
export default function InformalNotFoundPage() {
  const [number, setNumber] = useState(0);

  return (
    <section
      className="informalNotFoundPage"
      style={{ border: `4px solid ${pageColor}` }}
    >
      <header>
        <Container>
          <h2>Informal not found page</h2>

          <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
        </Container>
      </header>

      <div className="content">
        <Container>
          <p>
            The link is incorrect or the page has been removed. Make sure the
            link you are trying to open is correct.
          </p>
        </Container>
      </div>
    </section>
  );
}
