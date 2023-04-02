import React from "react";
import Container from "react-bootstrap/Container";

function ListItemNutrition(prop) {
  function convertTo1DP(number) {
    return Number.parseFloat(number).toFixed(1);
  }

  function convertTo2DP(number) {
    return Number.parseFloat(number).toFixed(2);
  }

  return (
    <Container
      className="listItemNutritionContainer"
      style={{ width: "90%", margin: "15px auto 10px" }}
    >
      <span className="listItemNutritionSpan">
        {prop.energy === -1 ? "-" : Math.round(prop.energy / 4.184)}
      </span>
      <span className="listItemNutritionSpan">
        {prop.carbohydrate === -1 ? "-" : convertTo1DP(prop.carbohydrate)}
      </span>
      <span className="listItemNutritionSpan">
        {prop.protein === -1 ? "-" : convertTo1DP(prop.protein)}
      </span>
      <span className="listItemNutritionSpan">
        {prop.totalFat === -1 ? "-" : convertTo1DP(prop.totalFat)}
      </span>
      <span className="listItemNutritionSpan">
        {prop.pricePerQuantity === -1
          ? "-"
          : convertTo2DP(prop.pricePerQuantity)}
      </span>
    </Container>
  );
}

export default ListItemNutrition;
