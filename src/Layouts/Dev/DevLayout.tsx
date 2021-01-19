import React from "react";

import "./DevLayout.scss";

import { devLayoutColor } from "./_Constants/devLayoutColor";
import { Container } from "reactstrap";
import Drawer from "Modules/Layout/Components/Drawer/Drawer";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/LayoutProps";
import { clearRouteProps } from "./_Helpers/clearRouteProps";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";

// TODO: Display the JSON in the drawer in a better way (openable, better styled, etc...).
export default function DevLayout({ routeMapperProps }: LayoutProps) {
  const _devLayoutColor: string =
    routeMapperProps &&
    routeMapperProps.drilledProps &&
    routeMapperProps.drilledProps.appColors &&
    routeMapperProps.drilledProps.appColors.dev
      ? routeMapperProps.drilledProps.appColors.dev
      : devLayoutColor;

  return (
    <section
      className="devLayout"
      style={{ border: `4px solid ${_devLayoutColor}` }}
    >
      <header>
        <h1 className="srOnly">ReactAutoRouting </h1>
      </header>

      <div className="content">
        <Drawer color={_devLayoutColor}>
          <h2>Route object: </h2>

          {routeMapperProps && routeMapperProps.routeObj ? (
            <pre>
              {JSON.stringify(
                clearRouteProps(routeMapperProps.routeObj),
                undefined,
                2
              )}
            </pre>
          ) : (
            <p>Route object not given</p>
          )}
        </Drawer>

        {routeMapperProps && (
          <RouteMapper
            {...routeMapperProps}
            suspenseFallback={<SimpleLoader color={_devLayoutColor} />}
          />
        )}
      </div>

      <footer style={{ borderTop: `4px solid ${_devLayoutColor}` }}>
        <Container>
          <p className="layoutInfo" style={{ color: _devLayoutColor }}>
            Dev Layout
          </p>
        </Container>
      </footer>
    </section>
  );
}
