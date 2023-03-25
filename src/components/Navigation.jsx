import React from "react";
import GrocerriaIcon from "../images/grocerria-icon.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Heading from "./Heading";

function Navigation() {
  const navigationIndicator = window.location.href.split("/")[3];

  return (
    <div className="navigationDiv">
      <Navbar
        bg="navigationNavbar"
        style={{ padding: "0px auto", height: "40px" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={GrocerriaIcon}
              width="18"
              height="18"
              className="d-inline-block align-centre"
              style={{ marginBottom: "2px", marginRight: "2px" }}
            />
            <Heading />
          </Navbar.Brand>
          <Nav>
            <div>
              <Nav.Link
                href="/"
                style={{ paddingTop: "14px", paddingBottom: "5px" }}
              >
                Search
              </Nav.Link>
              <div
                className="navigationIndicator"
                style={{
                  backgroundColor: navigationIndicator === "" ? "#ff218c" : "",
                }}
              ></div>
            </div>
            <div>
              <Nav.Link
                href="/about"
                style={{ paddingTop: "14px", paddingBottom: "5px" }}
              >
                About
              </Nav.Link>
              <div
                className="navigationIndicator"
                style={{
                  backgroundColor:
                    navigationIndicator === "about" ? "#ffd800" : "",
                }}
              ></div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
