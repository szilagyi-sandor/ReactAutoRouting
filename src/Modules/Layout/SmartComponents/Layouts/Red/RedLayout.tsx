import React, { memo, useState } from "react";

import "./RedLayout.scss";

import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import ColoredLayout from "../Colored/ColoredLayout";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import { redLayoutColor } from "./_Constants/redLayoutColor";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";

function RedLayout({ routeMapperProps }: LayoutProps) {
  const [number, setNumber] = useState(0);

  return (
    <div
      className="redLayout"
      style={{ border: `4px solid ${redLayoutColor}` }}
    >
      <ColoredLayout color={redLayoutColor}>
        {/* This dev keeps the footer at the bottom, until 
        RouteMapper returns nothing */}
        <div>
          {routeMapperProps && (
            <RouteMapper
              {...routeMapperProps}
              suspenseFallback={<SimpleLoader color={redLayoutColor} />}
            />
          )}
        </div>

        <div
          className="layoutInfo"
          style={{ borderTop: `4px solid ${redLayoutColor}` }}
        >
          <p style={{ color: redLayoutColor }}>Red Layout</p>

          <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
        </div>
      </ColoredLayout>
    </div>
  );
}

export default memo(RedLayout);
