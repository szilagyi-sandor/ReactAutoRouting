import React from "react";

import "./SimpleLoader.scss";

import { SimpleLoaderProps } from "./interfaces";

export default function SimpleLoader({ loading, color }: SimpleLoaderProps) {
  return loading !== false ? (
    <div className="simpleLoader">
      <div className="indicator" style={{ backgroundColor: color }}>
        <span className="srOnly">loading</span>
      </div>
    </div>
  ) : null;
}
