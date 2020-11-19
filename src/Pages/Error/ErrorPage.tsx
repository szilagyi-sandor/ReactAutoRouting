import React from "react";

import "./ErrorPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";

export default function ErrorPage() {
  return (
    <section className="errorPage" style={{ border: `4px solid ${pageColor}` }}>
      <header>
        <Container>
          <h2>Error page</h2>
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
