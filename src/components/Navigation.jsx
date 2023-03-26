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
        style={{ padding: "0px auto", height: "30px" }}
      >
        <Container style={{ width: "80%", height: "30px" }}>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={GrocerriaIcon}
              width="15"
              height="15"
              className="d-inline-block align-centre"
              style={{ marginBottom: "2px", marginRight: "1px" }}
            />
            <Heading />
          </Navbar.Brand>
          <Nav>
            <div>
              <Nav.Link
                href="/"
                style={{
                  height: "24px",
                  marginTop: "4px",
                  marginBottom: "0px",
                  fontSize: "0.6rem",
                }}
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
                style={{
                  height: "24px",
                  marginTop: "4px",
                  marginBottom: "0px",
                  fontSize: "0.6rem",
                }}
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
