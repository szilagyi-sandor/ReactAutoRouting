import React from "react";

import { Container } from "reactstrap";

export default function RestrictedPage() {
  return (
    <section className="restrictedPage">
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
