import React from "react";
import Container from "react-bootstrap/Container";

function ListItemNutrition(prop) {
  return (
    <Container
      className="listItemNutritionContainer"
      style={{ width: "90%", margin: "15px auto 10px" }}
    >
      <span className="listItemNutritionSpan">
        {prop.energy === -1 ? "-" : Math.round(prop.energy / 4.184)}
      </span>
      <span className="listItemNutritionSpan">
        {prop.carbohydrate === -1 ? "-" : prop.carbohydrate}
      </span>
      <span className="listItemNutritionSpan">
        {prop.protein === -1 ? "-" : prop.protein}
      </span>
      <span className="listItemNutritionSpan">
        {prop.totalFat === -1 ? "-" : prop.totalFat}
      </span>
    </Container>
  );
}

export default ListItemNutrition;
