import React, { useState } from "react";

import "./VerticalNavbar.scss";

import { VerticalNavbarProps } from "./interfaces";
import { NavLink } from "react-router-dom";
import RenderChecker from "../../RenderChecker/RenderChecker";

export default function VerticalNavbar({
  items,
  navbarBrand,
  color,
}: VerticalNavbarProps) {
  const [number, setNumber] = useState(0);

  return (
    <div className="verticalNavbar">
      <nav>
        {navbarBrand && (
          <h2
            className="navbarBrand"
            style={{ color, borderBottom: `4px solid ${color}` }}
          >
            <NavLink to={navbarBrand.url} exact>
              {navbarBrand.text}
            </NavLink>
          </h2>
        )}

        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <NavLink style={{ color }} to={item.url} exact>
                  <span> {item.text}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <RenderChecker
        number={number}
        setNumber={(val) => setNumber(val)}
        label="Navbar:"
      />
    </div>
  );
}
