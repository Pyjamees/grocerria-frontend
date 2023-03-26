import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function ListItemHeader(prop) {
  const link = "https://www.coles.com.au/product/" + prop.id;

  const load =
    prop.index % 2 === 0 ? "leftLoad" : prop.index % 2 === 1 ? "rightLoad" : "";

  const formattedPrice = prop.price.replace("per", "/");

  return (
    <React.Fragment>
      <Container
        key={prop.index + prop.id + "A"}
        className="listItemHeaderContainer"
        style={{
          position: "absolute",
          top: "0px",
          left: "7%",
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          margin: "15px auto",
          padding: "0px",
          animation: [
            prop.index * 50 + "ms ease-in 0s hide",
            "0.6s ease-in-out " + prop.index * 50 + "ms " + load,
          ],
        }}
      >
        <a href={link} target="_blank" style={{ marginTop: "0" }}>
          <button type="submit" className="listItemHeaderButton">
            Go to Coles
          </button>
        </a>
        <a href={link} className="listItemsA" target="_blank">
          {prop.name}
        </a>
      </Container>
      <Container key={prop.index + prop.id + "P"}>
        <div
          className="listItemPrice"
          style={{
            animation: [
              prop.index * 50 + "ms ease-in 0s hide",
              "0.6s ease-in-out " + prop.index * 50 + "ms " + load,
            ],
          }}
        >
          {formattedPrice}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default ListItemHeader;
