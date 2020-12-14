import React, { useState } from "react";

import "./PurpleLayout.scss";

import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { purpleLayoutColor } from "./_Constants/purpleLayoutColor";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/LayoutProps";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import { createPurpleBackground } from "./_Helpers/createPurpleBackground";

export default function PurpleLayout({ routeMapperProps }: LayoutProps) {
  const [number, setNumber] = useState(0);
  const borderStyle = `4px solid ${purpleLayoutColor}`;

  return (
    <div className="purpleLayout" style={{ border: borderStyle }}>
      <div
        style={{
          ...createPurpleBackground(),
          borderRight: borderStyle,
        }}
      />

      <div className="content">
        <div className="inner">
          {routeMapperProps && (
            <RouteMapper
              {...routeMapperProps}
              suspenseFallback={<SimpleLoader color={purpleLayoutColor} />}
            />
          )}
        </div>

        <div className="layoutInfo" style={{ borderTop: borderStyle }}>
          <p style={{ color: purpleLayoutColor }}>Purple Layout</p>

          <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
        </div>
      </div>
    </div>
  );
}
