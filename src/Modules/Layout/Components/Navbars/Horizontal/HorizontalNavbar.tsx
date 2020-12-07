import React, { useState } from "react";

import "./HorizontalNavbar.scss";

import { HorizontalNavbarProps } from "./interfaces";
import { Container, Nav, Navbar, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import RenderChecker from "../../RenderChecker/RenderChecker";

export default function HorizontalNavbar({
  items,
  navbarBrand,
  color,
}: HorizontalNavbarProps) {
  const [number, setNumber] = useState(0);

  return (
    <div className="horizontalNavbar">
      <Container>
        <Navbar expand="md">
          {navbarBrand && (
            <h2 className="navbarBrand navbar-brand" style={{ color }}>
              <NavLink to={navbarBrand.url} exact>
                {navbarBrand.text}
              </NavLink>
            </h2>
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

      <Container>
        <RenderChecker
          number={number}
          setNumber={(val) => setNumber(val)}
          label="Navbar:"
        />
      </Container>
    </div>
  );
}
