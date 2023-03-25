import React from "react";
import Container from "react-bootstrap/Container";

function ListItemGraph(prop) {
  return (
    <Container className="barContainer" style={{ width: "90%" }}>
      <div
        className="bar val-a"
        style={{ flexBasis: `${prop.percentageCarbohydrate}%` }}
      >
        C
      </div>
      <div
        className="bar val-b"
        style={{ flexBasis: `${prop.percentageProtein}%` }}
      >
        P
      </div>
      <div
        className="bar val-c"
        style={{ flexBasis: `${prop.percentageTotalFat}%` }}
      >
        F
      </div>
    </Container>
  );
}

export default ListItemGraph;
