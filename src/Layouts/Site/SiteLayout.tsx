import React, { PropsWithChildren, useState } from "react";

import "./SiteLayout.scss";

import { Container } from "reactstrap";
import HorizontalNavbar from "Modules/Layout/Components/Navbars/Horizontal/HorizontalNavbar";
import { siteNavItems } from "./_Constants/siteNavItems";
import { siteLayoutColor } from "./_Constants/siteLayoutColor";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";

export default function SiteLayout({
  routeMapperProps,
  children,
}: PropsWithChildren<LayoutProps>) {
  const [number, setNumber] = useState(0);

  return (
    <section
      className="siteLayout"
      style={{ border: `4px solid ${siteLayoutColor}` }}
    >
      <header style={{ borderBottom: `4px solid ${siteLayoutColor}` }}>
        <HorizontalNavbar
          color={siteLayoutColor}
          items={siteNavItems}
          navbarBrand={{
            text: "ReactAutoRouting",
            url: routePaths.site.home,
          }}
        />
      </header>

      <main className="content">
        {routeMapperProps && (
          <RouteMapper
            {...routeMapperProps}
            suspenseFallback={<SimpleLoader color={siteLayoutColor} />}
          />
        )}

        {children && children}
      </main>

      <footer style={{ borderTop: `4px solid ${siteLayoutColor}` }}>
        <Container>
          <p className="layoutInfo" style={{ color: siteLayoutColor }}>
            Site Layout
          </p>

          <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
        </Container>
      </footer>
    </section>
  );
}
