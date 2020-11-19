import React from "react";

import "./HorizontalNavbar.scss";

import { HorizontalNavbarProps } from "./interfaces";
import { Container, Nav, Navbar, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function HorizontalNavbar({
  items,
  navbarBrand,
  color,
}: HorizontalNavbarProps) {
  return (
    <div
      className="horizontalNavbar"
      style={{ borderBottom: `4px solid ${color}` }}
    >
      <Container>
        <Navbar expand="md">
          {navbarBrand && (
            <h1 className="navbarBrand navbar-brand" style={{ color }}>
              <NavLink to={navbarBrand.url} exact>
                {navbarBrand.text}
              </NavLink>
            </h1>
          )}

          <Nav className="ml-auto" navbar>
            {items.map((item, index) => (
              <NavItem key={index}>
                <NavLink
                  className="nav-link"
                  to={item.url}
                  style={{ color }}
                  exact
                >
                  <span>{item.text}</span>
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}
