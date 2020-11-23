import React, { useState } from "react";

import "./NotFoundPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  const [number, setNumber] = useState(0);

  return (
    <section
      className="notFoundPage"
      style={{ border: `4px solid ${pageColor}` }}
    >
      <header>
        <Container>
          <h2>Not found page</h2>

          <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
        </Container>
      </header>

      <div className="content">
        <Container>
          <p>
            The link is incorrect or the page has been removed. Make sure the
            link you are trying to open is correct.
          </p>

          <Link to={`/admin?test=${number}`}>Test link to self</Link>
        </Container>
      </div>
    </section>
  );
}
