import React from "react";

import { Container } from "reactstrap";

export default function NotFoundPage() {
  return (
    <section className="notFoundPage">
      <header>
        <Container>
          <h2>404, Page not found</h2>
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
