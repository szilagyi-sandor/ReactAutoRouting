import React, { useState } from "react";

import "./AdminNotFoundPage.scss";

import { pageColor } from "Pages/_Constants/pageColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { Container } from "reactstrap";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";

export default function AdminNotFoundPage({ drilledProps }: PageProps) {
  const [number, setNumber] = useState(0);

  const _pageColor: string =
    drilledProps && drilledProps.appColors && drilledProps.appColors.page
      ? drilledProps.appColors.page
      : pageColor;

  return (
    <section
      className="adminNotFoundPage"
      style={{ border: `4px solid ${_pageColor}` }}
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
