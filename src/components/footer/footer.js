import React from "react";
import "../../assets/css/custom.css"

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CopyrightIcon from "@material-ui/icons/Copyright";
import logo from "../../assets/img/customlogo.png";

export default function Footer() {
  return (
    <footer className="footerstyle">
      <Container>
        <div className="centericon">
          <img alt="..." className="logosize" src={logo} />
          <br /> <br />
          Made with <FavoriteIcon className="heart" /> by Rishwanth B. Copyright{" "}
          <CopyrightIcon style={{ fontSize: 17 }} /> 2021.
        </div>
      </Container>
    </footer>
  );
}
