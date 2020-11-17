import React, { memo } from "react";

import "./SiteLayout.scss";

import { Container } from "reactstrap";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import HorizontalNavbar from "Modules/Layout/Components/Navbars/Horizontal/HorizontalNavbar";
import { siteNavItems } from "./_Constants/siteNavItems";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";

function SiteLayout({ routes, suspenseFallback }: LayoutProps) {
  return (
    <section className="siteLayout">
      <header>
        <HorizontalNavbar
          items={siteNavItems}
          navbarBrand={{
            text: "ReactAutoRouting",
            url: routePaths.site.homePage,
          }}
        />
      </header>

      <div className="content">
        <RouteMapper routes={routes} suspenseFallback={suspenseFallback} />
      </div>

      <footer>
        <Container>
          <p className="layoutInfo">Site Layout</p>
        </Container>
      </footer>
    </section>
  );
}

export default memo(SiteLayout);
