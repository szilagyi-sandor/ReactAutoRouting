import React from "react";

import "./AdminRestrictedPage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";
import { handleAuthMessage } from "Modules/Routing/ReactAutoRouting/_Helpers/Auth/handleAuthMessage";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";

export default function AdminRestrictedPage({
  route,
  drilledProps,
}: PageProps) {
  const _pageColor: string =
    drilledProps && drilledProps.appColors && drilledProps.appColors.page
      ? drilledProps.appColors.page
      : pageColor;

  return (
    <section
      className="adminRestrictedPage"
      style={{ border: `4px solid ${_pageColor}` }}
    >
      <header>
        <Container fluid>
          <h2>Admin Resticted page</h2>
        </Container>
      </header>

      <div className="content">
        <Container fluid>
          <p>{handleAuthMessage(route.authRule)} </p>
        </Container>
      </div>
    </section>
  );
}
