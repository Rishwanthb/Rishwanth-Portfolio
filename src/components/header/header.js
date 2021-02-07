import React from "react";
import "../../assets/css/custom.css"

import { Link } from "react-router-dom";
// reactstrap components
import { NavbarBrand, Navbar, Container } from "reactstrap";

export default function Header() {
  const [color, setColor] = React.useState("navbar-transparent");

  return (
    <Navbar className={color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" id="navbar-brand" tag={Link}>
            <span>Hello, </span>
            Nice to see you!
          </NavbarBrand>
        </div>
      </Container>
    </Navbar>
  );
}
