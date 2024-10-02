import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="src/images/BrutusBuildsLogo.png"
        alt="BB Logo"
        className="footer-logo"
      />
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Brutus Builds Company. All rights reserved. | Contact: no-reply@bbcompany.com | (123) 456-7890
      </p>
    </footer>
  );
};

export default Footer;
