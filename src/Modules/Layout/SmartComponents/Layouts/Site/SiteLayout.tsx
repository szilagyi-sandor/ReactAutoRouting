import React, { memo } from "react";

import "./SiteLayout.scss";

import { Container } from "reactstrap";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import HorizontalNavbar from "Modules/Layout/Components/Navbars/Horizontal/HorizontalNavbar";
import { siteNavItems } from "./_Constants/siteNavItems";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import { siteLayoutColor } from "./_Constants/siteLayoutColor";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";

function SiteLayout({ routes }: LayoutProps) {
  return (
    <section
      className="siteLayout"
      style={{ border: `4px solid ${siteLayoutColor}` }}
    >
      <header>
        <HorizontalNavbar
          color={siteLayoutColor}
          items={siteNavItems}
          navbarBrand={{
            text: "ReactAutoRouting",
            url: routePaths.site.homePage,
          }}
        />
      </header>

      <div className="content">
        <RouteMapper
          routes={routes}
          suspenseFallback={<SimpleLoader color={siteLayoutColor} />}
        />
      </div>

      <footer style={{ borderTop: `4px solid ${siteLayoutColor}` }}>
        <Container>
          <p className="layoutInfo" style={{ color: siteLayoutColor }}>
            Site Layout
          </p>
        </Container>
      </footer>
    </section>
  );
}

export default memo(SiteLayout);
