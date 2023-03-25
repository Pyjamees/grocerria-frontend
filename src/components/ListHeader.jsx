import React from "react";
import ListHeadings from "./ListHeadings";
import Container from "react-bootstrap/Container";

function ListHeader(prop) {
  function updateSortCategoryOrder(categoryOrder) {
    prop.updateSortCategoryOrder(categoryOrder);
  }

  return (
    <Container className="listHeaderContainer border rounded">
      <ListHeadings updateSortCategoryOrder={updateSortCategoryOrder} />
    </Container>
  );
}

export default ListHeader;
