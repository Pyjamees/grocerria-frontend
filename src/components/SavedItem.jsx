import React from "react";

function SavedItem(prop) {
  const savedItemComponents = prop.savedItem.split("&&");
  const itemName = savedItemComponents[0];
  const itemEnergy = savedItemComponents[1];
  const itemCarbohydrate = savedItemComponents[2];
  const itemProtein = savedItemComponents[3];
  const itemTotalFat = savedItemComponents[4];

  return (
    <div
      className="savedItemDiv"
      style={{
        border:
          prop.index % 3 === 0
            ? "2px solid  #21b1ff"
            : prop.index % 3 === 1
            ? "2px solid  #ff218c"
            : prop.index % 3 === 2
            ? "2px solid  #FFD800"
            : "2px dashed rgba(0,0,0,0.2)",
      }}
    >
      {prop.savedItem === "NoItemSaved" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "rgba(0,0,0,0.55)",
          }}
        >
          <h1
            style={{
              fontSize: "0.7rem",
              margin: "20px auto 5px",
            }}
          >
            No Items Saved
          </h1>
          <h1 style={{ fontSize: "0.6rem", margin: "auto" }}>
            Click on a product to save it
          </h1>
        </div>
      ) : (
        <div>
          <div style={{ height: "32px" }}>
            <h1 className="savedItemName">{itemName}</h1>
          </div>
          <div className="savedItemMacro">
            {/* <div style={{ height: "50px", width: "50px" }}>
              <div
                style={{
                  fontWeight: "700",
                  height: "40px",
                  width: "40px",
                  margin: "5px",
                  padding: "8px 0",
                  textAlign: "center",
                  border: "2px solid black",
                  boxSizing: "border-box",
                  borderRadius: "100%",
                }}
              >
                {itemEnergy}
              </div>
            </div> */}
            <div style={{ width: "100%" }}>
              <div className="savedItemMacro">
                <div style={{ width: "10px" }}>C</div>
                <div
                  className="sideBar"
                  style={{
                    width: `${itemCarbohydrate}%`,
                    backgroundColor: "#ff218c",
                  }}
                ></div>
              </div>

              <div className="savedItemMacro">
                <div style={{ width: "10px" }}>P</div>
                <div
                  className="sideBar"
                  style={{
                    width: `${itemProtein}%`,
                    backgroundColor: "#ffd800",
                  }}
                ></div>
              </div>

              <div className="savedItemMacro">
                <div style={{ width: "10px" }}>F</div>
                <div
                  className="sideBar"
                  style={{
                    width: `${itemTotalFat}%`,
                    backgroundColor: "#21b1ff",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SavedItem;
