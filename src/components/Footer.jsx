import React from "react";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div>
      <p className="footer">Copyright © {currentYear} GrocerRia</p>
    </div>
  );
}

export default Footer;
