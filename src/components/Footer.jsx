import React from "react";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <React.Fragment>
      <div className="footerLinkContainer">
        <div className="footerLinks">
          <a className="footerLink" href="/home">
            Home
          </a>
          <a className="footerLink" href="/home">
            Search
          </a>
          <a className="footerLink" href="/about">
            About
          </a>
          <a className="footerLink" href="/privacy">
            Privacy
          </a>
        </div>
      </div>

      <div>
        <p className="footer">Copyright © {currentYear} GrocerRia</p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
