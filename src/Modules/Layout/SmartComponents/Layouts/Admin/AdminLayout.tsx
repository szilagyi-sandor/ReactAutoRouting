import React, { memo, useState } from "react";

import "./AdminLayout.scss";

import { Container } from "reactstrap";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import HorizontalNavbar from "Modules/Layout/Components/Navbars/Horizontal/HorizontalNavbar";
import { adminNavItems } from "./_Constants/adminNavItems";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import { adminLayoutColor } from "./_Constants/adminLayoutColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";

function AdminLayout({ routes, documentTitleFallback }: LayoutProps) {
  const [number, setNumber] = useState(0);

  return (
    <section
      className="adminLayout"
      style={{ border: `4px solid ${adminLayoutColor}` }}
    >
      <header>
        <HorizontalNavbar
          items={adminNavItems}
          color={adminLayoutColor}
          navbarBrand={{
            text: "Admin",
            url: routePaths.admin.homePage,
          }}
        />
      </header>

      <div className="content">
        <RouteMapper
          routes={routes}
          suspenseFallback={<SimpleLoader color={adminLayoutColor} />}
          documentTitleFallback={documentTitleFallback}
        />
      </div>

      <footer style={{ borderTop: `4px solid ${adminLayoutColor}` }}>
        <Container>
          <p className="layoutInfo" style={{ color: adminLayoutColor }}>
            Admin Layout
          </p>
          <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
        </Container>
      </footer>
    </section>
  );
}

export default memo(AdminLayout);
