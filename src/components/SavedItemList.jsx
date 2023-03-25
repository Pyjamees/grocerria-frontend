import React from "react";
import SavedItem from "./SavedItem";
import Container from "react-bootstrap/Container";

function SavedItemList(prop) {
  return (
    <React.Fragment>
      <div className="savedItemListHeading">
        <span>Grocery List</span>
      </div>

      {prop.savedItemArray.length !== 0 ? (
        prop.savedItemArray.map((savedItem, index) => (
          <SavedItem key={savedItem} savedItem={savedItem} index={index} />
        ))
      ) : (
        <SavedItem savedItem="NoItemSaved" />
      )}
    </React.Fragment>
  );
}

export default SavedItemList;
