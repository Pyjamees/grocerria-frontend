import React from "react";

function ListHeading(prop) {
  return (
    <div className="listHeadingContainer">
      <i
        className="fa-solid fa-caret-up"
        style={{
          opacity:
            prop.sortCategory === prop.heading
              ? prop.sortOrder === 1
                ? "1"
                : "0.2"
              : "0.2",
          color:
            prop.sortCategory === prop.heading
              ? prop.sortOrder === 1
                ? "rgb(33, 177, 255)"
                : "rgb(100, 100, 100)"
              : "rgb(100,100,100)",
          fontSize: "0.6rem",
        }}
      ></i>
      <span
        className="listHeadingSpan"
        style={{
          color:
            prop.sortCategory === prop.heading
              ? prop.sortOrder === 1
                ? "#21b1ff"
                : "#ff218c"
              : "",
          textShadow:
            prop.sortCategory === prop.heading
              ? prop.sortOrder === 1
                ? "0 0 0.5px #21b1ff"
                : "0 0 0.5px #ff218c"
              : "",
          transition: "color 0.1s linear 0s",
          animation:
            prop.sortCategory === prop.heading ? "0.1s growShrink" : "",
          transform: prop.sortCategory === prop.heading ? "scale(1.05)" : "",
        }}
        onClick={() => {
          prop.toggleSortCategory(prop.heading);
        }}
      >
        {prop.heading}
      </span>
      <span
        className="listUnitSpan"
        style={{
          color:
            prop.sortCategory === prop.heading
              ? prop.sortOrder === 1
                ? "rgba(33, 177, 255, 0.4)"
                : "rgba(255, 33, 140, 0.4)"
              : "",
          textShadow:
            prop.sortCategory === prop.heading
              ? prop.sortOrder === 1
                ? "0 0 0.5px rgba(33, 177, 255, 0.1)"
                : "0 0 0.5px rgba(255, 33, 140, 0.1)"
              : "",
          transition: "color 0.1s linear 0s",
          animation:
            prop.sortCategory === prop.heading ? "0.1s growShrink" : "",
          transform: prop.sortCategory === prop.heading ? "scale(1.05)" : "",
        }}
        onClick={() => {
          prop.toggleSortCategory(prop.heading);
        }}
      >
        {prop.unit}
      </span>
      <i
        className="fa-solid fa-caret-down"
        style={{
          opacity:
            prop.sortCategory === prop.heading
              ? prop.sortOrder === 1
                ? "0.2"
                : "1"
              : "0.2",
          color:
            prop.sortCategory === prop.heading
              ? prop.sortOrder === 1
                ? "rgb(100, 100, 100)"
                : "rgb(255, 33, 140)"
              : "rgb(100,100,100)",
          fontSize: "0.6rem",
        }}
      ></i>
    </div>
  );
}

export default ListHeading;
