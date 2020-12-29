import React, { useState } from "react";

import "./RouteSetterPage.scss";

import { pageColor } from "Pages/_Constants/pageColor";
import { Container } from "reactstrap";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";
import AppColorsSetterForm from "Modules/Customization/Components/AppColorsSetterForm/AppColorsSetterForm";
import { DrilledRouteProps } from "_Interfaces/DrilledRouteProps";
import { setAppColorsToLocalStorage } from "_Helpers/AppColorHelpers/setAppColorsToLocalStorage";

export default function RouteSetterPage({ drilledProps }: PageProps) {
  const [number, setNumber] = useState(0);

  const _pageColor: string =
    drilledProps && drilledProps.appColors && drilledProps.appColors.page
      ? drilledProps.appColors.page
      : pageColor;

  const setAppColors: DrilledRouteProps["setAppColors"] | undefined =
    drilledProps && drilledProps.setAppColors;

  const appColors: DrilledRouteProps["appColors"] | undefined =
    drilledProps && drilledProps.appColors;

  return (
    <section
      className="routeSetterPage"
      style={{ border: `4px solid ${_pageColor}` }}
    >
      <header>
        <Container fluid>
          <h2>Route setter page</h2>

          <RenderChecker
            number={number}
            setNumber={(val) => setNumber(val)}
            label="Route setter page:"
          />
        </Container>
      </header>

      <div className="content">
        <section className="appColorSetter">
          <header>
            <Container fluid>
              <h3>App color settings</h3>
            </Container>
          </header>

          <div className="content">
            <Container fluid>
              {appColors && setAppColors && (
                <AppColorsSetterForm
                  appColors={appColors}
                  setAppColors={(appColors) => {
                    setAppColors(appColors);
                    setAppColorsToLocalStorage(appColors);
                  }}
                />
              )}
            </Container>
          </div>
        </section>
      </div>
    </section>
  );
}
