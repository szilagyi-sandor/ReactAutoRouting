import React, { PropsWithChildren, useState } from "react";

import "./Drawer.scss";

import { ReactComponent as ArrowLeft } from "Assets/Images/Left.svg";

import { DrawerProps } from "./interfaces";
import { openedStorageName } from "./_Constants/openedStorageName";
import RenderChecker from "../RenderChecker/RenderChecker";

export default function Drawer({
  color,
  children,
}: PropsWithChildren<DrawerProps>) {
  const borderStyle = `4px solid ${color}`;

  const [alreadyOpened, setAlreadyOpened] = useState(
    localStorage.getItem(openedStorageName)
  );
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(0);

  let buttonClass = open ? "open" : "";
  if (!alreadyOpened) {
    buttonClass += " hasAnimation";
  }

  return (
    <div className={`drawer${open ? " open" : ""}`}>
      <div className="btnWrapper">
        <button
          style={{
            borderTop: borderStyle,
            borderLeft: borderStyle,
            borderBottom: borderStyle,
            borderRight: 0,
            fill: color,
          }}
          className={buttonClass}
          onClick={() => {
            setOpen(!open);
            setAlreadyOpened("true");
            localStorage.setItem(openedStorageName, "true");
          }}
        >
          <ArrowLeft />
        </button>
      </div>

      <div className="inner" style={{ borderLeft: borderStyle }}>
        <RenderChecker
          number={number}
          setNumber={(val) => setNumber(val)}
          label="Drawer:"
        />

        {children}
      </div>
    </div>
  );
}
