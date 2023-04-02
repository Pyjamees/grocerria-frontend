import React, { useState, useEffect, useRef, useContext } from "react";
import Container from "react-bootstrap/Container";
import ListHeading from "./ListHeading";
import { SearchInputContext } from "./Search";

function ListHeadings(prop) {
  const searchInput = useContext(SearchInputContext);
  const [sortCategory, setSortCategory] = useState("");
  const [sortOrder, setSortOrder] = useState(-1);

  // const previousSortOrder = useRef();
  // useEffect(() => {
  //   previousSortOrder.current = sortOrder;
  // }, [sortCategory]);

  const previousSortCategory = useRef("");

  useEffect(() => {
    previousSortCategory.current = sortCategory;
  }, [sortCategory]);

  function toggleSortCategory(event) {
    setSortCategory(event);
    if (previousSortCategory.current != event) {
      setSortOrder(1);
      prop.updateSortCategoryOrder([event, 1]);
    } else if (previousSortCategory.current === event) {
      setSortOrder(-sortOrder);
      prop.updateSortCategoryOrder([event, -sortOrder]);
    }
    // prop.updateSortCategoryOrder([event, -sortOrder]);
  }

  useEffect(() => {
    setSortCategory("");
    setSortOrder(-1);
  }, [searchInput]);

  // useEffect(() => {
  //   setSortOrder(1);
  // }, [sortCategory]);

  return (
    <Container className="listHeadingsContainer" style={{ width: "90%" }}>
      <ListHeading
        key={"energy" + sortCategory + sortOrder}
        heading="Energy"
        unit="Cal/100g"
        sortCategory={sortCategory}
        sortOrder={sortOrder}
        toggleSortCategory={toggleSortCategory}
      />
      <ListHeading
        key={"carbohydrate" + sortCategory + sortOrder}
        heading="Carbohydrate"
        unit="g/100g"
        sortCategory={sortCategory}
        sortOrder={sortOrder}
        toggleSortCategory={toggleSortCategory}
      />
      <ListHeading
        key={"protein" + sortCategory + sortOrder}
        heading="Protein"
        unit="g/100g"
        sortCategory={sortCategory}
        sortOrder={sortOrder}
        toggleSortCategory={toggleSortCategory}
      />
      <ListHeading
        key={"totalFat" + sortCategory + sortOrder}
        heading="Total Fat"
        unit="g/100g"
        sortCategory={sortCategory}
        sortOrder={sortOrder}
        toggleSortCategory={toggleSortCategory}
      />
      <ListHeading
        key={"price" + sortCategory + sortOrder}
        heading="Price"
        unit="$/100g"
        sortCategory={sortCategory}
        sortOrder={sortOrder}
        toggleSortCategory={toggleSortCategory}
      />
    </Container>
  );
}

export default ListHeadings;
