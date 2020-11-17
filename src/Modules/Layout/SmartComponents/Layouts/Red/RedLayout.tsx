import React, { memo } from "react";

import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/LayoutProps";
import ColoredLayout from "../Colored/ColoredLayout";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";

function RedLayout({ routes, suspenseFallback }: LayoutProps) {
  return (
    <div className="redLayout">
      <ColoredLayout color="#de4444">
        <RouteMapper routes={routes} suspenseFallback={suspenseFallback} />
      </ColoredLayout>
    </div>
  );
}

export default memo(RedLayout);
