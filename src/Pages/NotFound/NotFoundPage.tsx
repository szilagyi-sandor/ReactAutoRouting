import React from "react";

import "./NotFoundPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";

export default function NotFoundPage() {
  return (
    <section
      className="notFoundPage"
      style={{ border: `4px solid ${pageColor}` }}
    >
      <header>
        <Container>
          <h2>Not found page</h2>
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
