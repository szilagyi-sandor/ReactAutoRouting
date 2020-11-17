import React, { memo } from "react";

import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import ColoredLayout from "../Colored/ColoredLayout";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";

function GreenLayout({ routes, suspenseFallback }: LayoutProps) {
  return (
    <div className="greenLayout">
      <ColoredLayout color="#59a059">
        <RouteMapper routes={routes} suspenseFallback={suspenseFallback} />
      </ColoredLayout>
    </div>
  );
}

export default memo(GreenLayout);
