import React from "react";

import "./RenderChecker.scss";

import { RenderCheckerProps } from "./interfaces";

export default function RenderChecker({
  number,
  setNumber,
}: RenderCheckerProps) {
  return (
    <div className="renderChecker">
      <div className="btnWrapper">
        <button onClick={() => setNumber(number + 1)}>Increase</button>
      </div>

      <span className={number === 0 ? "initial" : ""}>{number}</span>
    </div>
  );
}
