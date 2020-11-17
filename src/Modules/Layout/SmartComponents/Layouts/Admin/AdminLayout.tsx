import React, { memo } from "react";

import "./AdminLayout.scss";

import { Container } from "reactstrap";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import HorizontalNavbar from "Modules/Layout/Components/Navbars/Horizontal/HorizontalNavbar";
import { adminNavItems } from "./_Constants/adminNavItems";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";

function AdminLayout({ routes, suspenseFallback }: LayoutProps) {
  return (
    <section className="adminLayout">
      <header>
        <HorizontalNavbar
          items={adminNavItems}
          navbarBrand={{
            text: "Admin",
            url: routePaths.admin.homePage,
          }}
        />
      </header>

      <div className="content">
        <RouteMapper routes={routes} suspenseFallback={suspenseFallback} />
      </div>

      <footer className="bg-light text-dark text-center">
        <Container>Admin Footer</Container>
      </footer>
    </section>
  );
}

export default memo(AdminLayout);
