import React from "react";

import "./PurpleLayout.scss";

import { purpleLayoutColor } from "./_Constants/purpleLayoutColor";
import { LayoutProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/LayoutProps";
import RouteMapper from "Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import { createPurpleBackground } from "./_Helpers/createPurpleBackground";

export default function PurpleLayout({ routeMapperProps }: LayoutProps) {
  const _purpleLayoutColor: string =
    routeMapperProps &&
    routeMapperProps.drilledProps &&
    routeMapperProps.drilledProps.appColors &&
    routeMapperProps.drilledProps.appColors.purple
      ? routeMapperProps.drilledProps.appColors.purple
      : purpleLayoutColor;

  const borderStyle = `4px solid ${_purpleLayoutColor}`;

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
              suspenseFallback={<SimpleLoader color={_purpleLayoutColor} />}
            />
          )}
        </div>

        <div className="layoutInfo" style={{ borderTop: borderStyle }}>
          <p style={{ color: _purpleLayoutColor }}>Purple Layout</p>
        </div>
      </div>
    </div>
  );
}
