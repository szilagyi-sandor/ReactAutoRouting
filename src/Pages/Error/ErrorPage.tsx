import React from "react";

import { Container } from "reactstrap";

export default function ErrorPage() {
  return (
    <section className="errorPage">
      <header>
        <Container>
          <h2>Error</h2>
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
