import React, { useState } from "react";

import "./ColorSetterPage.scss";

import { pageColor } from "Pages/_Constants/pageColor";
import { Container } from "reactstrap";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";
import AppColorsSetterForm from "Modules/Customization/Components/AppColorsSetterForm/AppColorsSetterForm";
import { setAppColorsToLocalStorage } from "Modules/Customization/_Helpers/AppColorHelpers/setAppColorsToLocalStorage";
import { DrilledRouteProps } from "_Interfaces/DrilledRouteProps";
import { defaultAppColors } from "Modules/Customization/_Constants/defaultAppColors";
import { deleteAppColorsFromLocalStorage } from "Modules/Customization/_Helpers/AppColorHelpers/deleteAppColorsFromLocalStorage";

export default function ColorSetterPage({ drilledProps }: PageProps) {
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
      className="colorSetterPage"
      style={{ border: `4px solid ${_pageColor}` }}
    >
      <header>
        <Container fluid>
          <h2>Color setter page</h2>

          <RenderChecker
            number={number}
            setNumber={(val) => setNumber(val)}
            label="Menu setter page:"
          />
        </Container>
      </header>

      <div className="content">
        <Container fluid>
          {appColors && setAppColors && (
            <AppColorsSetterForm
              appColors={appColors}
              setAppColors={(appColors) => {
                if (appColors) {
                  setAppColors(appColors);
                  setAppColorsToLocalStorage(appColors);
                  return;
                }

                setAppColors(defaultAppColors);
                deleteAppColorsFromLocalStorage();
              }}
            />
          )}
        </Container>
      </div>
    </section>
  );
}
