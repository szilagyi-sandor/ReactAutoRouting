import React from "react";

import "./RenderChecker.scss";

import { RenderCheckerProps } from "./interfaces";
import { Link } from "react-router-dom";

export default function RenderChecker({
  number,
  setNumber,
  label,
}: RenderCheckerProps) {
  return (
    <div className="renderChecker">
      {label && <div>{label}</div>}

      <div className="inner">
        <div className="btnWrapper">
          <button onClick={() => setNumber(number + 1)}>Increase</button>
        </div>

        <span className={`counter${number === 0 ? " initial" : ""}`}>
          {number}
        </span>

        <Link to={`?check=${number}`}>Query link</Link>
      </div>
    </div>
  );
}
