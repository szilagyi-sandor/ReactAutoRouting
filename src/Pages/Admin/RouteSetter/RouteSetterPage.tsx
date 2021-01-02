import React from "react";

import "./RouteSetterPage.scss";

import { pageColor } from "Pages/_Constants/pageColor";
import { Container } from "reactstrap";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";
import { DrilledRouteProps } from "_Interfaces/DrilledRouteProps";
import RouteSetterForm from "Modules/Customization/Components/RouteSetterForm/RouteSetterForm";
import { setCustomRoutesToLocalStorage } from "Modules/Customization/_Helpers/CustomRouteHelpers/setCustomRoutesToLocalStorage";
import { routes as defaultRoutes } from "Modules/Routing/_Constants/routes";
import { deleteCustomRoutesFromLocalStorage } from "Modules/Customization/_Helpers/CustomRouteHelpers/deleteCustomRoutesFromLocalStorage";
import { processRoutes } from "Modules/Routing/ReactAutoRouting/_Helpers/RouteHandlers/processRoutes";
import { replaceCustomRouteComponents } from "Modules/Customization/_Helpers/CustomRouteHelpers/replaceCustomRouteComponents";

export default function RouteSetterPage({ drilledProps }: PageProps) {
  const _pageColor: string =
    drilledProps && drilledProps.appColors && drilledProps.appColors.page
      ? drilledProps.appColors.page
      : pageColor;

  const setRoutes: DrilledRouteProps["setRoutes"] | undefined =
    drilledProps && drilledProps.setRoutes;

  return (
    <section
      className="routeSetterPage"
      style={{ border: `4px solid ${_pageColor}` }}
    >
      <header>
        <Container fluid>
          <h2>Route setter page</h2>
        </Container>
      </header>

      <div className="content">
        <Container fluid>
          {setRoutes && (
            <RouteSetterForm
              setRoutes={(storedRoutes) => {
                if (storedRoutes) {
                  setCustomRoutesToLocalStorage(storedRoutes);

                  const processedRoutes = processRoutes(
                    replaceCustomRouteComponents(storedRoutes)
                  );

                  setRoutes(processedRoutes);

                  return;
                }

                setRoutes(defaultRoutes);
                deleteCustomRoutesFromLocalStorage();
              }}
            />
          )}
        </Container>
      </div>
    </section>
  );
}
