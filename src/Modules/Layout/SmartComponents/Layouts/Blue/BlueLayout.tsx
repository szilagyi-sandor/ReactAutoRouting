import React, { memo } from "react";

import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import ColoredLayout from "../Colored/ColoredLayout";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";

function BlueLayout({ routes, suspenseFallback }: LayoutProps) {
  return (
    <div className="blueLayout">
      <ColoredLayout color="#4c77c7">
        <RouteMapper routes={routes} suspenseFallback={suspenseFallback} />
      </ColoredLayout>
    </div>
  );
}

export default memo(BlueLayout);
