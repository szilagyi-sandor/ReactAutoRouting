import React, { useState } from "react";

import "./AdminLayout.scss";

import { Container } from "reactstrap";
import { adminNavItems } from "./_Constants/adminNavItems";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import { adminLayoutColor } from "./_Constants/adminLayoutColor";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import VerticalNavbar from "Modules/Layout/Components/Navbars/Vertical/VerticalNavbar";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/LayoutProps";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";

export default function AdminLayout({ routeMapperProps }: LayoutProps) {
  const [number, setNumber] = useState(0);

  return (
    <section
      className="adminLayout"
      style={{ border: `4px solid ${adminLayoutColor}` }}
    >
      <header>
        <div className="scrollHelper">
          <VerticalNavbar
            items={adminNavItems}
            color={adminLayoutColor}
            navbarBrand={{
              text: "Admin",
              url: routePaths.adminHome,
            }}
          />
        </div>
      </header>

      <div
        className="inner"
        style={{ borderLeft: `4px solid ${adminLayoutColor}` }}
      >
        <div className="scrollHelper">
          <main className="content">
            {routeMapperProps && (
              <RouteMapper
                {...routeMapperProps}
                suspenseFallback={<SimpleLoader color={adminLayoutColor} />}
              />
            )}
          </main>

          <footer style={{ borderTop: `4px solid ${adminLayoutColor}` }}>
            <Container>
              <p className="layoutInfo" style={{ color: adminLayoutColor }}>
                Admin Layout
              </p>

              <RenderChecker
                number={number}
                setNumber={(val) => setNumber(val)}
              />
            </Container>
          </footer>
        </div>
      </div>
    </section>
  );
}
