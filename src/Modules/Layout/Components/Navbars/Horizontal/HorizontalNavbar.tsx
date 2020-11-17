import React from "react";

import "./HorizontalNavbar.scss";

import { HorizontalNavbarProps } from "./interfaces";
import { Container, Nav, Navbar, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function HorizontalNavbar({
  items,
  navbarBrand,
}: HorizontalNavbarProps) {
  return (
    <div className="horizontalNavbar">
      <Container>
        <Navbar expand="md">
          {navbarBrand && (
            <h1 className="navbarBrand navbar-brand">
              <NavLink to={navbarBrand.url} exact>
                {navbarBrand.text}
              </NavLink>
            </h1>
          )}

          <Nav className="ml-auto" navbar>
            {items.map((item, index) => (
              <NavItem key={index}>
                <NavLink className="nav-link" to={item.url} exact>
                  {item.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}
