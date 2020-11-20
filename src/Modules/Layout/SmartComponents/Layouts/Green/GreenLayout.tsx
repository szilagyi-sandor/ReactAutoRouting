import React, { memo, useEffect, useState } from "react";

import "./GreenLayout.scss";

import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import ColoredLayout from "../Colored/ColoredLayout";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import { greenLayoutColor } from "./_Constants/greenLayoutColor";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";

function GreenLayout({ routes, documentTitleFallback }: LayoutProps) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("GreenLayout - render");
  });
  return (
    <div
      className="greenLayout"
      style={{ border: `4px solid ${greenLayoutColor}` }}
    >
      <ColoredLayout color={greenLayoutColor}>
        {/* This dev keeps the footer at the bottom, until 
        RouteMapper returns nothing */}
        <div>
          <RouteMapper
            routes={routes}
            suspenseFallback={<SimpleLoader color={greenLayoutColor} />}
            documentTitleFallback={documentTitleFallback}
          />
        </div>

        <div
          className="layoutInfo"
          style={{ borderTop: `4px solid ${greenLayoutColor}` }}
        >
          <p style={{ color: greenLayoutColor }}>Green Layout</p>

          <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
        </div>
      </ColoredLayout>
    </div>
  );
}

export default memo(GreenLayout);
