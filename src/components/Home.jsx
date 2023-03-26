import React, { useState, createContext } from "react";
import Search from "./Search";
import Container from "react-bootstrap/Container";
import SidePanel from "./SidePanel.jsx";

export const SavedItemArrayContext = createContext("");

function Home() {
  let [savedItemArray, setSavedItemArray] = useState([]);
  let [savedItemsCount, setSavedItemsCount] = useState(0);

  function saveItemArray(newItem) {
    let newSavedItemArray = [];
    if (savedItemArray.includes(...newItem)) {
      newSavedItemArray = savedItemArray.filter(function (value, index, arr) {
        return value != newItem;
      });
    } else {
      newSavedItemArray = [...savedItemArray, ...newItem];
      newSavedItemArray = [...new Set(newSavedItemArray)];
    }
    setSavedItemArray(newSavedItemArray);
    setSavedItemsCount(newSavedItemArray.length);
  }

  return (
    <div className="document">
      {/* <div className="navigationUnderline"></div> */}
      <div className="updateContainer">
        <span className="updateSpan">Last Update: Tuesday, 21 March 2023</span>
      </div>
      <div className="body">
        <Container style={{ width: "55%" }}>
          <SavedItemArrayContext.Provider value={savedItemArray}>
            <Search saveItemArray={saveItemArray} />
          </SavedItemArrayContext.Provider>
        </Container>
        {/* <SidePanel
          savedItemArray={savedItemArray}
          savedItemsCount={savedItemsCount}
        /> */}
      </div>
    </div>
  );
}

export default Home;
