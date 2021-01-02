import React from "react";

import "./SiteLayout.scss";

import { Container } from "reactstrap";
import HorizontalNavbar from "Modules/Layout/Components/Navbars/Horizontal/HorizontalNavbar";
import { siteLayoutColor } from "./_Constants/siteLayoutColor";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/LayoutProps";
import { getEnumObjById } from "_Helpers/EnumHelpers/getEnumObjById";
import { roles } from "Modules/Auth/_Constants/roles";
import { filterRestrictedNavItems } from "_Helpers/filterRestrictedNavItems";
import { clearUserFromLocalStorage } from "Modules/Auth/mock";
import { DrilledRouteProps } from "_Interfaces/DrilledRouteProps";

export default function SiteLayout({ routeMapperProps }: LayoutProps) {
  const userInfo =
    routeMapperProps &&
    routeMapperProps.userInfo &&
    routeMapperProps.userInfo.role > 0
      ? routeMapperProps.userInfo
      : undefined;

  const userName = userInfo && userInfo.name ? userInfo.name : "Unknown";
  const userRole = userInfo && getEnumObjById(roles, userInfo.role);
  const userRoleName = userRole ? userRole.name : "Unknown";

  const navbarUserInfo = userInfo
    ? {
        imgUrl: userInfo.imgUrl,
        text: `${userName} (${userRoleName})`,
      }
    : undefined;

  const setUser: DrilledRouteProps["setUser"] | undefined =
    routeMapperProps &&
    routeMapperProps.drilledProps &&
    routeMapperProps.drilledProps.setUser;

  const menuItems: DrilledRouteProps["menuItems"] | undefined =
    routeMapperProps &&
    routeMapperProps.drilledProps &&
    routeMapperProps.drilledProps.menuItems;

  const _siteLayoutColor: string =
    routeMapperProps &&
    routeMapperProps.drilledProps &&
    routeMapperProps.drilledProps.appColors &&
    routeMapperProps.drilledProps.appColors.site
      ? routeMapperProps.drilledProps.appColors.site
      : siteLayoutColor;

  return (
    <section
      className="siteLayout"
      style={{ border: `4px solid ${_siteLayoutColor}` }}
    >
      <header style={{ borderBottom: `4px solid ${_siteLayoutColor}` }}>
        <HorizontalNavbar
          color={_siteLayoutColor}
          items={
            menuItems ? filterRestrictedNavItems(menuItems.site, userInfo) : []
          }
          navbarBrand={{
            text: "ReactAutoRouting",
            url: routePaths.home,
          }}
          userInfo={navbarUserInfo}
          onLogout={() => {
            if (setUser) {
              setUser(undefined);
              clearUserFromLocalStorage();
            }
          }}
        />
      </header>

      <main className="content">
        {routeMapperProps && (
          <RouteMapper
            {...routeMapperProps}
            suspenseFallback={<SimpleLoader color={_siteLayoutColor} />}
          />
        )}
      </main>

      <footer style={{ borderTop: `4px solid ${_siteLayoutColor}` }}>
        <Container>
          <p className="layoutInfo" style={{ color: _siteLayoutColor }}>
            Site Layout
          </p>
        </Container>
      </footer>
    </section>
  );
}
