import React from "react";
import ListHeader from "./ListHeader";
import ListItems from "./ListItems";
import SearchItemsCount from "./SearchItemsCount";

function List(prop) {
  function saveItemArray(savedItemArray) {
    prop.saveItemArray(savedItemArray);
  }

  function setSearchItemsCount(searchItemsCount) {
    prop.setSearchItemsCount(searchItemsCount);
  }

  function updateSortCategoryOrder(categoryOrder) {
    prop.updateSortCategoryOrder(categoryOrder);
  }

  return (
    <React.Fragment>
      <div className="listHeaderStickyContainer">
        <ListHeader updateSortCategoryOrder={updateSortCategoryOrder} />
        <div className="listHeaderBlurBox"></div>
      </div>
      <ListItems
        products={prop.products}
        setSearchItemsCount={setSearchItemsCount}
        saveItemArray={saveItemArray}
      />
    </React.Fragment>
  );
}

export default List;
