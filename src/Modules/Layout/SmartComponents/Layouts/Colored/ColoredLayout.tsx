import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import React, { memo, PropsWithChildren, useState } from "react";

import "./ColoredLayout.scss";

import { ColoredLayoutProps } from "./interfaces";

function ColoredLayout({
  children,
  color,
}: PropsWithChildren<ColoredLayoutProps>) {
  const [number, setNumber] = useState(0);
  return (
    <div className="coloredLayout">
      <div style={{ backgroundColor: color }}>
        <RenderChecker number={number} setNumber={(val) => setNumber(val)} />
      </div>

      <div>{children}</div>
    </div>
  );
}

// TODO: is memo necessary here?
export default memo(ColoredLayout);
