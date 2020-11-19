import React, { memo, PropsWithChildren } from "react";

import "./ColoredLayout.scss";

import { ColoredLayoutProps } from "./interfaces";

function ColoredLayout({
  children,
  color,
}: PropsWithChildren<ColoredLayoutProps>) {
  return (
    <div className="coloredLayout">
      <div style={{ backgroundColor: color }}></div>

      <div>{children}</div>
    </div>
  );
}

// TODO: is memo necessary here?
export default memo(ColoredLayout);
