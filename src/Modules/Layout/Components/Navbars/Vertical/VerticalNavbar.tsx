import React from "react";

import "./VerticalNavbar.scss";

import DefaultUserImgUrl from "Assets/Images/User.svg";

import { VerticalNavbarProps } from "./interfaces";
import { NavLink } from "react-router-dom";

export default function VerticalNavbar({
  items,
  navbarBrand,
  color,
  userInfo,
  onLogout,
}: VerticalNavbarProps) {
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

        {userInfo && (
          <div style={{ borderColor: color }} className="userInfo">
            <div className="imgWrapper">
              <img
                src={userInfo.imgUrl ? userInfo.imgUrl : DefaultUserImgUrl}
                alt=""
              />
            </div>

            <div className="inner">
              <div className="text">{userInfo.text}</div>

              {onLogout && (
                <div className="btnWrapper">
                  <button onClick={() => onLogout()}>logout</button>
                </div>
              )}
            </div>
          </div>
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
    </div>
  );
}
