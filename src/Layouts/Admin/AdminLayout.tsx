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
import { getEnumObjById } from "_Helpers/EnumHelpers/getEnumObjById";
import { roles } from "Modules/Auth/_Constants/roles";
import { filterRestrictedNavItems } from "_Helpers/filterRestrictedNavItems";
import { clearUserFromLocalStorage } from "Modules/Auth/mock";
import { DrilledRouteProps } from "_Interfaces/DrilledRouteProps";

export default function AdminLayout({ routeMapperProps }: LayoutProps) {
  const [number, setNumber] = useState(0);

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

  const setUser: DrilledRouteProps["setUser"] =
    routeMapperProps &&
    routeMapperProps.drilledProps &&
    routeMapperProps.drilledProps.setUser;

  return (
    <section
      className="adminLayout"
      style={{ border: `4px solid ${adminLayoutColor}` }}
    >
      <header>
        <div className="scrollHelper">
          <VerticalNavbar
            items={filterRestrictedNavItems(adminNavItems, userInfo)}
            color={adminLayoutColor}
            navbarBrand={{
              text: "Admin",
              url: routePaths.adminHome,
            }}
            userInfo={navbarUserInfo}
            onLogout={() => {
              setUser(undefined);
              clearUserFromLocalStorage();
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
