import React from "react";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return <p className="footer">Copyright © {currentYear} GrocerRia</p>;
}

export default Footer;
