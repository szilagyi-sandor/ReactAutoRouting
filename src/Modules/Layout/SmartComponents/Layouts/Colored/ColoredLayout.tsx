import React, { memo, PropsWithChildren } from "react";

import "./ColoredLayout.scss";

import { ColoredLayoutProps } from "./interfaces";

// TODO: is memo necessary?
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

export default memo(ColoredLayout);
