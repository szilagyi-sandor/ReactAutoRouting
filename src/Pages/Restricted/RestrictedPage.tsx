import React from "react";

import "./RestrictedPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";

export default function RestrictedPage() {
  return (
    <section
      className="restrictedPage"
      style={{ border: `4px solid ${pageColor}` }}
    >
      <header>
        <Container>
          <h2>Resticted page</h2>
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
