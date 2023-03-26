import React, { useState } from "react";
import SavedItemList from "./SavedItemList";

function SidePanel(prop) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sidePanelDiv">
      <button
        className="sidePanelButton"
        onClick={toggleIsOpen}
        style={{
          right: isOpen ? "350px" : "0",
          transition: "right 0.2s ease-in-out",
        }}
      >
        <i className="fa fa-list"></i>
      </button>
      <div
        className="savedItemsCountDiv"
        style={{
          right: isOpen ? "382px" : "32px",
          transition: "right 0.2s ease-in-out",
        }}
      ></div>
      <div
        className="savedItemsCountSpan"
        style={{
          right: isOpen ? "382px" : "32px",
          transition: "right 0.2s ease-in-out",
        }}
      >
        {prop.savedItemsCount}
      </div>
      <div
        className="sidePanelList"
        style={{
          width: isOpen ? "350px" : "0",
          transition: "width 0.2s ease-in-out",
        }}
      >
        {isOpen ? (
          <SavedItemList savedItemArray={prop.savedItemArray} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default SidePanel;
