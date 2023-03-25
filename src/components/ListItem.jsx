import React, { useState, useEffect, useContext, useRef } from "react";
import Container from "react-bootstrap/Container";
import ListItemHeader from "./ListItemHeader";
import ListItemNutrition from "./ListItemNutrition";
import ListItemGraph from "./ListItemGraph";
import { SavedItemArrayContext } from "./Home";

function ListItem(prop) {
  const [saved, setSaved] = useState(false);
  const [previousSaved, setPreviousSaved] = useState(false);
  const [savedItemArray, setSavedItemArray] = useState([]);

  function saveItem() {
    prop.saveItem(
      prop.name +
        "&&" +
        Math.round(prop.energy / 4.184) +
        "&&" +
        prop.carbohydrate +
        "&&" +
        prop.protein +
        "&&" +
        prop.totalFat
    );
    setPreviousSaved(saved);
    setSaved(!saved);
  }

  let previousSavedItemArray = useContext(SavedItemArrayContext);
  useEffect(() => {
    setSavedItemArray(previousSavedItemArray);
  }, [previousSavedItemArray]);

  const load =
    // previousSaved != saved
    //   ? ""
    //   :
    prop.index % 6 === 0
      ? "blueLeftLoad"
      : prop.index % 6 === 1
      ? "redRightLoad"
      : prop.index % 6 === 2
      ? "yellowLeftLoad"
      : prop.index % 6 === 3
      ? "blueRightLoad"
      : prop.index % 6 === 4
      ? "redLeftLoad"
      : prop.index % 6 === 5
      ? "yellowRightLoad"
      : "";

  return (
    <Container
      key={prop.id}
      className="border rounded listItemContainer"
      style={{
        marginBottom: "0.5vw",
        cursor: "pointer",
        animation: [
          prop.index * 50 + "ms ease-in 0s hide",
          "0.6s ease-in-out " + prop.index * 50 + "ms " + load,
        ],
        boxShadow: savedItemArray.includes(
          prop.name +
            "&&" +
            Math.round(prop.energy / 4.184) +
            "&&" +
            prop.carbohydrate +
            "&&" +
            prop.protein +
            "&&" +
            prop.totalFat
        )
          ? prop.index % 3 === 0
            ? "inset 0 0 0 0.3rem #21b1ff"
            : prop.index % 3 === 1
            ? "inset 0 0 0 0.3rem #ff218c"
            : prop.index % 3 === 2
            ? "inset 0 0 0 0.3rem #FFD800"
            : ""
          : "",
      }}
      onClick={saveItem}
    >
      <ListItemNutrition
        key={prop.id + "LIT"}
        energy={prop.energy}
        carbohydrate={prop.carbohydrate}
        protein={prop.protein}
        totalFat={prop.totalFat}
      />
      <ListItemGraph
        key={prop.id + "LIG"}
        percentageProtein={prop.percentageProtein}
        percentageTotalFat={prop.percentageTotalFat}
        percentageCarbohydrate={prop.percentageCarbohydrate}
      />
    </Container>
  );
}

export default ListItem;
