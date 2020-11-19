import React, { memo } from "react";

import "./AdminLayout.scss";

import { Container } from "reactstrap";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import HorizontalNavbar from "Modules/Layout/Components/Navbars/Horizontal/HorizontalNavbar";
import { adminNavItems } from "./_Constants/adminNavItems";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import { adminLayoutColor } from "./_Constants/adminLayoutColor";

function AdminLayout({ routes }: LayoutProps) {
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
        />
      </div>

      <footer style={{ borderTop: `4px solid ${adminLayoutColor}` }}>
        <Container>
          <p className="layoutInfo" style={{ color: adminLayoutColor }}>
            Admin Layout
          </p>
        </Container>
      </footer>
    </section>
  );
}

export default memo(AdminLayout);
