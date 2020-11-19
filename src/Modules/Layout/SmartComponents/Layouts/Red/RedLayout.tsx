import React, { memo } from "react";

import "./RedLayout.scss";

import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import ColoredLayout from "../Colored/ColoredLayout";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import { redLayoutColor } from "./_Constants/redLayoutColor";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";

function RedLayout({ routes, suspenseFallback }: LayoutProps) {
  return (
    <div
      className="redLayout"
      style={{ border: `4px solid ${redLayoutColor}` }}
    >
      <ColoredLayout color={redLayoutColor}>
        {/* This dev keeps the footer at the bottom, until 
        RouteMapper returns nothing */}
        <div>
          <RouteMapper
            routes={routes}
            suspenseFallback={<SimpleLoader color={redLayoutColor} />}
          />
        </div>

        <div
          className="layoutInfo"
          style={{ borderTop: `4px solid ${redLayoutColor}` }}
        >
          <p style={{ color: redLayoutColor }}>Red Layout</p>
        </div>
      </ColoredLayout>
    </div>
  );
}

export default memo(RedLayout);
