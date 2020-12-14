import React, { useState } from "react";

import "./AdminNotFoundPage.scss";

import { pageColor } from "Pages/_Constants/pageColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { Container } from "reactstrap";

export default function AdminNotFoundPage() {
  const [number, setNumber] = useState(0);

  return (
    <section
      className="adminNotFoundPage"
      style={{ border: `4px solid ${pageColor}` }}
    >
      <header>
        <Container fluid>
          <h2>Admin not found page</h2>

          <RenderChecker
            number={number}
            setNumber={(val) => setNumber(val)}
            label="Admin not found page:"
          />
        </Container>
      </header>

      <div className="content">
        <Container fluid>
          <p>
            The link is incorrect or the page has been removed. Make sure the
            link you are trying to open is correct.
          </p>
        </Container>
      </div>
    </section>
  );
}
