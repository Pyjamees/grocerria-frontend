import React from "react";

function TitlePage() {
  return (
    <div className="titlePageDiv">
      <div className="titlePageTitle">
        <div className="titlePageSpanBlue">Your one-stop shop</div>
        <div className="titlePageSpanRed">to all grocery shops</div>
      </div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1600 700"
        className="titlePageBackground"
      >
        <rect fill="#FFFFFF" width="1600" height="700" />
        <g fill-opacity="1">
          <polygon fill="#ffd800" points="0 0 0 700 1000 700 1300 0" />
          <polygon fill="#21b1ff" points="1000 700 1300 0 1600 0 1300 700" />
          <polygon fill="#ff218c" points="1500 0 1200 700 1300 700 1600 0" />
        </g>
      </svg>
    </div>
  );
}

export default TitlePage;
